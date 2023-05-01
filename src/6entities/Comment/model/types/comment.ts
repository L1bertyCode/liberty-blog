import { User } from "6entities/User";

export interface Comment {
  id: string;
  user: User;
  text: string;
}
