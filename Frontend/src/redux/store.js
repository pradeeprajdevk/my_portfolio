import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './portfolioSlice';

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
});

export default store;
