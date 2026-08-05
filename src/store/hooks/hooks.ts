import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { selectUser, selectIsAuthenticated } from "../features/Auth/authSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Direct helper hooks
export const useUser = () => useAppSelector(selectUser);
export const useIsAuthenticated = () => useAppSelector(selectIsAuthenticated);

