import { HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

export type UserRole = "Student" | "Admin" | "Employer";

export type EditingItem = {
  id?: string;
  category?: string;
};

export type SessionData = {
  agent: HttpAgent;
  principalId: string;
  accountId: string;
} | null;

export type role = {
  _id: string;
  name: UserRole;
  code: string;
};

export type UserData = {
  _id: string;
  access_token: string;
  name: string;
  username: string;
  password: string;
  rules: role[];
};

export type EventData = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  code: string;
  tokens: number;
};

export type NFTData = {
  description: string;
  id: number;
  name: string;
  owner: Principal;
  url: string;
};
