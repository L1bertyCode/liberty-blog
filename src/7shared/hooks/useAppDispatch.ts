import { AppDispatch } from "1app/porviders/StroreProvider";
import { useDispatch } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();
