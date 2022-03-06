import { Provider, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
export default class SupabaseAuthService {
    static myInstance: any;
    static supabase: SupabaseClient;
    static getInstance(SUPABASE_URL?: string, SUPABASE_KEY?: string): any;
    showLogin: any;
    setShowLogin: any;
    static user: BehaviorSubject<User | null>;
    static profile: BehaviorSubject<any>;
    private _user;
    static subscription: any;
    constructor();
    private loadUser;
    loadProfile(): Promise<void>;
    getCurrentUser(): User | null;
    signUpWithEmail: (email: string, password: string) => Promise<{
        user: User | null;
        session: import("@supabase/supabase-js").AuthSession | null;
        error: import("@supabase/supabase-js").ApiError | null;
    }>;
    signInWithEmail: (email: string, password: string) => Promise<{
        user: User | null;
        session: import("@supabase/supabase-js").AuthSession | null;
        error: import("@supabase/supabase-js").ApiError | null;
    }>;
    signInWithProvider: (provider: Provider) => Promise<{
        user: User | null;
        session: import("@supabase/supabase-js").AuthSession | null;
        error: import("@supabase/supabase-js").ApiError | null;
    }>;
    resetPassword: (email: string) => Promise<{
        data: {} | null;
        error: import("@supabase/supabase-js").ApiError | null;
    }>;
    sendMagicLink: (email: string) => Promise<{
        user: User | null;
        session: import("@supabase/supabase-js").AuthSession | null;
        error: import("@supabase/supabase-js").ApiError | null;
    }>;
    updatePassword: (access_token: string, new_password: string) => Promise<{
        error: import("@supabase/supabase-js").ApiError | null;
        data: User | null;
    }>;
    signOut: () => Promise<{
        error: import("@supabase/supabase-js").ApiError | null;
    }>;
}
