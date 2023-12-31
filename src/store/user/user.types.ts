type SignInUserRequest = {
  email: string;
  password: string;
}

type SignInUserResponse = {
  access_token: string;
  token_type: string;
}

type FetchUserRequest = {
  token: string;
}

type FetchUserResponse = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: typeof Date;
  updated_at: typeof Date;
}

type UserState = {
  loading: boolean;
  profile: {
    id: number | null;
    email: string;
    name: string;
    token: string;
  }
}


export type {
  UserState,
  SignInUserRequest,
  SignInUserResponse,
  FetchUserRequest,
  FetchUserResponse,
};
