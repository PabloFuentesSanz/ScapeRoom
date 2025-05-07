export interface User {
  name: string;
  email: string;
  progress: number;
  bestScore: number;
}

export interface UserRepository {
  signIn: () => Promise<boolean>;
  signOut: () => Promise<boolean>;
  isLogin: () => Promise<boolean>;
}
