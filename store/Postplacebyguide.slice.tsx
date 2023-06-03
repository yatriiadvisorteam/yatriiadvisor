// postplacebyguide.slice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
interface PostPlaceState {
  place: any; // Modify this type according to your needs
  loading: boolean;
  error: string | null |undefined;
}

const initialState: PostPlaceState = {
  place: null,
  loading: false,
  error: null,
};

// Create an async thunk to handle the API request
export const postPlaceByGuide = createAsyncThunk(
  'postplace/postPlaceByGuide',
  async (placeData: any) => {
    try {
      // Make the API request to store place details
      const response = await axios.post('/api/place', placeData);

      // Return the response data
      return response.data;
    } catch (error:any) {
      // Handle any errors and throw them
      throw error.response.data.error;
    }
  }
);

// Create the postplace slice
const postplaceSlice = createSlice({
  name: 'postplace',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postPlaceByGuide.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postPlaceByGuide.fulfilled, (state, action) => {
        state.loading = false;
        state.place = action.payload;
      })
      .addCase(postPlaceByGuide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the postplace slice actions and reducer
export default postplaceSlice;
