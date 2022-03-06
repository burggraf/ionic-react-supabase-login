import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonModal, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

// import { useHistory } from "react-router-dom";

// import StartupService from '../services/startup.service';
import SupabaseAuthService from './supabase.auth.service';

import './ResetPassword.css';
let supabaseAuthService: SupabaseAuthService;

interface ContainerProps {
    // backdropDismiss?: boolean;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
}

// const startupService = StartupService.getInstance();
// const defaultRoute = startupService.getDefaultRoute();



export const ResetPassword: React.FC<ContainerProps> = ({
  SUPABASE_URL, SUPABASE_KEY
}) => {
    if (!supabaseAuthService) {
      supabaseAuthService = SupabaseAuthService.getInstance(SUPABASE_URL, SUPABASE_KEY);
    }

    // const history = useHistory();
    // const { token } = useParams<{ token: string; }>();
    // let token: string = '';
    const [showModal, setShowModal] = useState(false);

    const [token, setToken] = useState('');
    const [present, dismiss] = useIonToast();
    const [password, setPassword] = useState('');

    useEffect(() => {
      const hash = window.location.hash;
      console.log('hash', hash);
      if (hash && hash.substring(0,1) === '#') {
          const tokens = hash.substring(1).split('&');
          const entryPayload: any = {};
          tokens.map((token) => {
              const pair = (token + '=').split('=');
              entryPayload[pair[0]] = pair[1];
          });
          console.log('entryPayload', entryPayload);
          if (entryPayload?.type === 'recovery') { // password recovery link
              // return `/resetpassword/${entryPayload.access_token}`;
              // token = entryPayload.access_token;
              setToken(entryPayload.access_token);
              setShowModal(true);
              console.log('token was set to:', token);
          } else {
            console.log('token was not set entryPayload:', entryPayload);
          }
          
      } else {
        console.log('no hash was found');
      }  
    },[]);

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
    const updatePassword = async () => {
        const { /*data,*/ error }  = 
            await supabaseAuthService.updatePassword(token, password);
        if (error) { toast(error.message) }
        else { 
            present({
                color: 'success',
                message: 'Password successfully updated',
                cssClass: 'toast',
                buttons: [{ icon: 'close', handler: () => dismiss() }],
                duration: 6000,
                onDidDismiss: () => {
                    // history.push(defaultRoute);
                    // history.replace(defaultRoute);
                    window.location.href = '/';
                },
                //onWillDismiss: () => console.log('will dismiss'),
              })                
         }
    }
    
  return (
    <>
    <IonModal 
    isOpen={showModal} 
    backdropDismiss={false}
    className='my-custom-class'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/page" />
          </IonButtons>
          <IonTitle>Reset Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid class="ion-padding">
            <IonRow>
                <IonCol>
                    <IonLabel><b>New Password</b></IonLabel>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonInput type="password" 
                    placeholder="Enter your new password" 
                    onIonChange={e => setPassword(e.detail.value!)}
                    value={password} class="inputBox" />
                </IonCol>
            </IonRow>
            {password.length > 0 && password.length < 6 && 
                <IonRow>
                    <IonCol>
                        <IonLabel color="danger"><b>Password too short</b></IonLabel>
                    </IonCol>
                </IonRow>
            }
            <IonRow>
                <IonCol>
                    <IonButton expand="block" 
                    disabled={password.length < 6}
                    onClick={updatePassword}>
                        <IonIcon icon={checkmark} size="large" />&nbsp;&nbsp;
                        <b>Save New Password</b>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonModal>
    <span></span>
    </>
  );
};

// export default ResetPassword;
