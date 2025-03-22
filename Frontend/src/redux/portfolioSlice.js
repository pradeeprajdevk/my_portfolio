import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userServices } from '../services/userServices';

export const fetchUserData = createAsyncThunk(
  'portfolio/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userServices.fetchUserData();
      return data[0];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch user data');
    }
  }
);

export const fetchAboutData = createAsyncThunk(
  'portfolio/fetchAboutData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userServices.fetchAboutData();
      return data[0];
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch about data');
    }
  }
);

export const fetchExperienceData = createAsyncThunk(
  'portfolio/getExperienceData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userServices.getExperienceData();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || 'Failed to fetch experience data'
      );
    }
  }
);

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    user: {},
    about: {},
    experience: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchUserData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchAboutData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.about = action.payload;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchExperienceData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExperienceData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.experience = action.payload;
      })
      .addCase(fetchExperienceData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
