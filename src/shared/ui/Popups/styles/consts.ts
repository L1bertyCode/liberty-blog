import { DropdownDirection } from "../../../types/ui";
import s from "./popup.module.scss";
export const mapDirectionClass: Record<
  DropdownDirection,
  string
> = {
  "bottom left": s.menuListBottomLeft,
  "bottom right": s.menuListBottomRight,
  "top left": s.menuListTopLeft,
  "top right": s.menuListTopRight,
};
