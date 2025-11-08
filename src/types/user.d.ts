export interface UserType {
  isAuthenticatied: boolean;
}

export interface UserAuthenticatedType extends UserType {
  credits: number;
  username: string | null;
  email: string | null;
}
