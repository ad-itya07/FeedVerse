export interface UserContextType {
  currentUser: User | null;
  isLoading: boolean;
  logout: () => Promise<void>;
}

export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  confirmed_at: string;
  created_at: string;
  updated_at: string;
  last_sign_in_at: string;
  is_anonymous: boolean;
  phone: string;
  recovery_sent_at: string;
  app_metadata: AppMetadata;
  identities: IdentityData[];
  user_metadata: UserMetadata;
}

export interface IdentityData {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: { [key: string]: any };
  provider: string;
}

export interface UserMetadata {
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  iss: string;
  name: string;
  phone_verified: boolean;
  picture: string;
  provider_id: string;
  sub: string;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}
