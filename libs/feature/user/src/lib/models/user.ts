export class User {
  id: number;
  // firstName: string;
  name: string;
  // lastName: string;
  // email: string;
  // password: string;
  // confirmPassword: string;
  // role: string;
  // leadOnTeams: string[];
  // memberOnTeams: string[];
  // admin: boolean;
  // approved: boolean;
  // loggedIn: boolean;
}

export interface UserStoreState {
  usersState: User[];
  userState: User;
}
