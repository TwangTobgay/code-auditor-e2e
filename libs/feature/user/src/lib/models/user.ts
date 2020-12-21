export class User {
  id: number;
  firstName: string;
  profileName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  leadOnTeams: string[];
  memberOnTeams: string[];
  admin: boolean;
  approved: boolean;
  constructor() {
    this.id = undefined;
    this.firstName = undefined;
    this.profileName = undefined;
    this.lastName = undefined;
    this.email = undefined;
    this.password = undefined;
    this.confirmPassword = undefined;
    this.role = undefined
  }
}

export interface UserStoreState {
  usersState: User[];
  userState: User;
}

