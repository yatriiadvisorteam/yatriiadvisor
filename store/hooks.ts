import {useDispatch} from "react-redux"
import { AppDispatch } from "../store";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;