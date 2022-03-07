# ionic-react-supabase-login
A modal login component for Ionic React Framework and Supabase Authentication.

## Demos

#### Sign in with email/password or Oauth Provider

![login with email/password, or provider](img/email_password_provider.gif)

#### Password-less sign in (magic link)
![login with magic link](img/magic_link.gif)

#### Reset Password
![reset email password](img/reset_password.gif)

## Features
- Register with email / password
- Login with email / password
- Password-less (magic link) login
- Request password reset email
- Process incoming password reset email
- Login with third party Oauth providers
    - supported providers: apple, bitbucket, discord, facebook, github, gitlab, google, twitch, twitter, slack, spotify, notion, zoom, azure, linkedin
    - providers each have a logo button
- Log out
- Display email address for logged in user
- Execute a function when user clicks on their own email (typically this would open your profile page)
- Execute a function on successful login and/or logout
- Subscribe to current user and/or current user’s profile (accessed through useState)

## Quick Start
1. Create a project at [https://supabase.com](https://supabase.com), save your `SUPABASE_URL` and `SUPABASE_KEY` (anonymous key)
2. Create or open an [Ionic React](https://ionicframework.com) Project (use the sidemenu template)
3. `npm i ionic-react-supabase-login`
4. Open `Menu.tsx`
5. To the top, add: `import { Login, ResetPassword } from 'ionic-react-supabase-login';`
6. In the render section, add:
```jsx
    <Login 
        SUPABASE_URL="SUPABASE_URL"}
        SUPABASE_KEY="SUPABASE_KEY" />
    <ResetPassword 
        SUPABASE_URL="SUPABASE_URL"}
        SUPABASE_KEY="SUPABASE_KEY" />
```

### Login Component
```jsx
    // const [user, setUser] = useState<any>(null);
    // const keys = {
     //   "SUPABASE_URL":"https://project_ref.supabase.co",
     //   "SUPABASE_KEY":"my_supabase_anon_key}
    <Login 
        SUPABASE_URL={keys.SUPABASE_URL}
        SUPABASE_KEY={keys.SUPABASE_KEY}
        // everything below is optional
        providers={['google', 'facebook', 'twitter']} // Oauth providers
        backdropDismiss={false} // dismiss when user taps background?
        profileFunction={() => {}} // execute when user taps on user name (go to profile)
        onSignIn={() => {}} // execute on successful signin
        onSignOut={() => {}} // execute on successful signout
        setUser={setUser} // execute useState function on user state change
        profileTable="profile" // set table name for public profile table (i.e. "profile")
        profileKey="key" // set key field name for public profile table (i.e. "id")
    />
```
### Reset Password Component
(Renders as a modal after 2 seconds if a password reset token is received by current window.)
```jsx
    <ResetPassword 
    SUPABASE_URL={keys.SUPABASE_URL}
    SUPABASE_KEY={keys.SUPABASE_KEY} />
```
### Subscribe to User and Profile
Subscribe to state changes for current user and optional profile:
```jsx
  const [ user, setUser ] = useState<any>(null);
  const [ profile, setProfile ] = useState<any>(null);
  useEffect(() => {
    const userSubscription = SupabaseAuthService.subscribeUser(setUser);
    const profileSubscription = SupabaseAuthService.subscribeProfile(setProfile);
    return () => {
        SupabaseAuthService.unsubscribeUser(userSubscription);
        SupabaseAuthService.unsubscribeProfile(profileSubscription);
    }
  },[])
```

