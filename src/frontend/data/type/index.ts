import { HttpAgent } from "@dfinity/agent";

export type UserRule = "Student" | "Admin" | "Employer";

export type EditingItem = {
  id?: string;
  category?: string;
};

export type SessionData = {
  agent: HttpAgent;
  principalId: string;
  accountId: string;
} | null;
