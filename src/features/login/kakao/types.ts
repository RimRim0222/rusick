/**
 * https://www.npmjs.com/package/react-kakao-login
 * types.d.ts
 */
export interface KakaoError {
  error: string;
  error_description: string;
}

interface Profile {
  nickname: string;
  profile_image: string;
  thumbnail_image_url: string;
  profile_needs_agreement?: boolean;
}
interface KakaoAccount {
  profile: Profile;
  email: string;
  age_range: string;
  birthday: string;
  birthyear: string;
  gender: 'female' | 'male';
  phone_number: string;
  ci: string;
}
interface UserProfile {
  id: number;
  kakao_account: KakaoAccount;
  synched_at: string;
  connected_at: string;
  properties: Profile;
}

interface LoginResponse {
  token_type: string;
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}

export interface IKakaoLoginSuccess {
  response: LoginResponse;
  profile?: UserProfile;
}
