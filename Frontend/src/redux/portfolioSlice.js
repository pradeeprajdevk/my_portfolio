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

export const fetchSkillsData = createAsyncThunk(
  'portfolio/getSkillsData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userServices.getSkillsData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch skills data');
    }
  }
);

export const fetchProjectsData = createAsyncThunk(
  'portfolio/getProjectsData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userServices.getProjectsData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch projects data');
    }
  }
);

export const createContactForm = createAsyncThunk(
  'portfolio/postContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const data = await userServices.postContact(contactData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || 'Failed to submit the contact details'
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
    skills: [],
    projects: [],
    contact: {},
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
      })
      .addCase(fetchSkillsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkillsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.skills = action.payload;
      })
      .addCase(fetchSkillsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchProjectsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjectsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjectsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createContactForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createContactForm.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contact = action.payload;
      })
      .addCase(createContactForm.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default portfolioSlice.reducer;
