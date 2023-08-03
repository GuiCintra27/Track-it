import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/global/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
