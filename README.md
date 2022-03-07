# ionic-react-supabase-login
A modal login component for Ionic React Framework and Supabase Authentication.

## Quick Start
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

