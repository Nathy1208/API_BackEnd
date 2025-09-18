import { Role } from "../../commons/enums/role.enums";

export interface UserPayload {
  userId: number;
  email: string;
  role: Role;
}