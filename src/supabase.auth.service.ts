import { createClient, Provider, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';

// import { keys } from '../services/keys.service';

// const supabase: SupabaseClient = createClient(keys.SUPABASE_URL, keys.SUPABASE_KEY);

export default class SupabaseAuthService {
  static myInstance:any = null;
  static supabase: SupabaseClient;
  static getInstance(SUPABASE_URL?: string, SUPABASE_KEY?: string) {
    if (this.myInstance == null) {
      if (SUPABASE_URL && SUPABASE_KEY) {
        this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
        this.myInstance = new this();
      } else {
        console.error('SupabaseAuthService: getInstance: missing SUPABASE_URL or SUPABASE_KEY');
        this.myInstance = null;
      }
    }
    return this.myInstance;
  }

  public showLogin: any;
  public setShowLogin: any;

  public user = new BehaviorSubject<User | null>(null);
  public profile = new BehaviorSubject<any>(null);
  private _user: User | null = null;
  private _profile: any = null;
  public static subscription: any = null;
  
  constructor() {
    // Try to recover our user session
    this.loadUser();
    SupabaseAuthService.subscription = SupabaseAuthService.supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          this._user = session.user;
          this.user.next(session.user);
        } else if (session === null) {
          this._user = null;
          this.user.next(null);
        }  
        this.loadProfile();
      });  
  }

  // ************** auth ****************

  private async loadUser() {
    const user = SupabaseAuthService.supabase.auth.user();
    if (user) {
      this._user = user;
      this.user.next(user);
    } else {
      // no current user
    }
  };

  public async loadProfile() {
    if (this._user?.id!) {
      const { data, error } = 
      await SupabaseAuthService.supabase.from('profile')
      .select('*')
      .eq('id', this._user?.id!)
      .limit(1)
      .single(); // return a single object (not an array)
      if (error) {
        console.error('loadProfile error: ', error);
      } else {
        this._profile = data;
        this.profile.next(data);
      }
    } else {
      this._profile = null;
      this.profile.next(null);
    }
  }

  public getCurrentUser() {
    return this._user;
  }

  public signUpWithEmail = async (email: string, password: string) => {
    const { user, session, error } = await SupabaseAuthService.supabase.auth.signUp({
      email: email,
      password: password,
    });
    return { user, session, error };
  }

  public signInWithEmail = async (email: string, password: string) => {
    const { user, session, error } = await SupabaseAuthService.supabase.auth.signIn({
      email: email,
      password: password,
    });
    return { user, session, error };
  }

  public signInWithProvider = async (provider: Provider) => {
    const { user, session, error } = await SupabaseAuthService.supabase.auth.signIn({
      provider: provider
    }, {
      redirectTo: window.location.href // .origin
    });
    return { user, session, error };
  }

  public resetPassword = async (email: string) => {
    const { data, error } = await SupabaseAuthService.supabase.auth.api.resetPasswordForEmail(email,
      {
        redirectTo: window.location.origin
      });
    return { data, error };
  }

  public sendMagicLink = async (email: string) => {
    const { user, session, error } = await SupabaseAuthService.supabase.auth.signIn({
      email: email
    }, {
      redirectTo: window.location.origin
    });
    return { user, session, error };
  }

  public updatePassword = async (access_token: string, new_password: string) => {
    const { error, data } = await SupabaseAuthService.supabase.auth.api
      .updateUser(access_token, { password: new_password });
    return { error, data };
  }

  public signOut = async () => {
    const { error } = await SupabaseAuthService.supabase.auth.signOut();
    if (!error) {
      this.user.next(null);
    }
    return { error };
  }
}
