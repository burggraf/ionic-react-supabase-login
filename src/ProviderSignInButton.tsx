import { IonButton, IonIcon, IonLoading, useIonToast } from '@ionic/react'
import { Provider } from '@supabase/supabase-js'
import { addIcons } from 'ionicons'
import { logoApple, logoBitbucket, logoDiscord, logoFacebook, logoGithub, logoGitlab, logoGoogle, logoLinkedin, logoMicrosoft, logoSlack, logoTwitch, logoTwitter } from 'ionicons/icons'
import { useState } from 'react'

// import logoNotion from './notion.svg';
//import logoSpotify from './spotify.svg'
// import { useHistory } from 'react-router'

import SupabaseAuthService from './supabase.auth.service'

//import logoZoom from './zoom.svg'

import './ProviderSignInButton.css'

interface ContainerProps {
	name: string;
	color?: string;
	SUPABASE_URL: string;
	SUPABASE_KEY: string;
}

addIcons({
	apple: logoApple,
	bitbucket: logoBitbucket,
	discord: logoDiscord,
	facebook: logoFacebook,
	github: logoGithub,
	gitlab: logoGitlab,
	google: logoGoogle,
	twitch: logoTwitch,
	twitter: logoTwitter,
	slack: logoSlack,
	spotify: './spotify.svg', // logoSpotify,
	notion: './notion.svg', // logoNotion,
	zoom: './zoom.svg', // logoZoom,
	microsoft: logoMicrosoft,
	azure: logoMicrosoft,
	linkedin: logoLinkedin
})
let supabaseAuthService: SupabaseAuthService;

const ProviderSignInButton: React.FC<ContainerProps> = ({ name, color, SUPABASE_URL, SUPABASE_KEY }) => {
	const [showLoading, setShowLoading] = useState(false);
	if (!supabaseAuthService) {
		supabaseAuthService = SupabaseAuthService.getInstance(SUPABASE_URL, SUPABASE_KEY);
	}
	// const nameProperCase = name.charAt(0).toUpperCase() + name.slice(1)
	// const history = useHistory()
	const signInWithProvider = async (provider: Provider) => {
		const { user, session, error } = await supabaseAuthService.signInWithProvider(provider);
		console.log('user', user)
		console.log('session', session)
		console.log('error', error)
		if (error) {
			toast(error.message);
			setShowLoading(false);
		} else {
			// *** we can't get here becuase of the third-party redirect...
			// if (onSignIn) {
			// 	onSignIn(user, session);
			// }

			//window.location.href = '/';
			// history.replace('/')
		}
	}
	const [present, dismiss] = useIonToast()

	const toast = (message: string, color: string = 'danger') => {
		present({
			color: color,
			message: message,
			cssClass: 'toast',
			buttons: [{ icon: 'close', handler: () => dismiss() }],
			duration: 6000,
			//onDidDismiss: () => console.log('dismissed'),
			//onWillDismiss: () => console.log('will dismiss'),
		})
	}
	return (
		<>
		<IonLoading isOpen={showLoading} message={'Loading'} />
		<IonButton
			// expand='block'
			// color='primary'
			fill='clear'
			className='round-button'
			style={{ margin: '8px', color: color || 'primary' }}
			onClick={() => {
				signInWithProvider(name as Provider)
			}}>
			{/* <b style={{textTransform: "uppercase"}}>{name}</b> */}
			{ name.startsWith('./') && 
				<IonIcon src={name}  size='large' slot="icon-only" />	
			}
			{ !name.startsWith('./') && 
				<IonIcon icon={name}  size='large' slot="icon-only" />	
			}
		</IonButton>	
		</>
	)
}

export default ProviderSignInButton
