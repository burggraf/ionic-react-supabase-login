/// <reference types="react" />
import './Login.css';
interface ContainerProps {
    showModal?: boolean;
    setShowModal?: Function;
    backdropDismiss?: boolean;
    profileFunction?: Function;
    providers?: string[];
    onSignIn?: Function;
    onSignOut?: Function;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
}
export declare const Login: React.FC<ContainerProps>;
export {};
