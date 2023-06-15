export { saveJsonSettings } from "./model/services/saveJsonSettings";

export { useJsonSettings } from "./model/selectors/jsonSetings";

export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from "./model/selectors/getUserRoles/getUserRoles";
export { UserRole } from "./model/consts/consts";

export { getUserInited } from "./model/selectors/getUserInited/getUserInited";

export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { userReducer, userActions } from "./model/slices/userSlice";
export type { User, UserSchema } from "./model/types/user";