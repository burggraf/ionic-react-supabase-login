/// <reference types="react" />
import './ProviderSignInButton.css';
interface ContainerProps {
    name: string;
    color?: string;
    SUPABASE_URL: string;
    SUPABASE_KEY: string;
}
declare const ProviderSignInButton: React.FC<ContainerProps>;
export default ProviderSignInButton;
