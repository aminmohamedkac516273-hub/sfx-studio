export type UserRole = "EDITOR" | "STUDENT" | "CLIENT" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}
