import { configureStore } from '@reduxjs/toolkit';
import {useSelector} from "react-redux";
import postplaceSlice from './postplacebyguide.slice';



export const store = configureStore({
  reducer: {
   notes:postplaceSlice.reducer,
   
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector = useSelector<RootState>

