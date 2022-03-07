# ionic-react-supabase-login
A modal login component for Ionic React Framework and Supabase Authentication.

```jsx
    // const [user, setUser] = useState<any>(null);
    <Login 
        SUPABASE_URL={keys.SUPABASE_URL}
        SUPABASE_KEY={keys.SUPABASE_KEY}
        providers={['google', 'facebook', 'twitter']}
        backdropDismiss={false}
        profileFunction={() => {}}
        onSignIn={() => {}}
        onSignOut={() => {}}
        setUser={setUser}
        profileTable="profile"
        profileKey="key"


    // setUser={setUser}
    // profileFunction={() => { console.log('profileFunction here..'); }}
    // onSignIn={() => { console.log('onSignIn here..'); }}
    // onSignOut={() => { console.log('onSignOut here..'); }}
    />
```
