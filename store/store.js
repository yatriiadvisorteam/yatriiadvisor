import { configureStore } from '@reduxjs/toolkit';
import postplacebyguideReducer from './postplacebyguideSlice';

const store = configureStore({
  reducer: {
    postplacebyguide: postplacebyguideReducer,
  },
});

export default store;
