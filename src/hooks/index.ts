import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootType } from "../store";

export const useTypeSelector: TypedUseSelectorHook<rootType> = useSelector