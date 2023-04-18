import { AppDispatch } from "1app/porviders/StoreProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch = () =>
  useDispatch<AppDispatch>();
