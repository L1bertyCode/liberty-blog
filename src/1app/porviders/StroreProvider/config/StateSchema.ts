import { CounterSchema } from "6entities/Counter";
import { UserSchema } from "6entities/User";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
