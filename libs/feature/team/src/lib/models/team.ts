// @ts-ignore
import { User } from "@selise-start/user/models/user.ts";

export interface Team {
  id: number;
  teamName: string;
  dateEstd: string;
  teamLead: string;
  teamMembers: string;
}

export interface TeamStoreState {
  teamsState: Team[];
  teamState: Team;
  teamLead: User;
  teamMembers: User[];
}
