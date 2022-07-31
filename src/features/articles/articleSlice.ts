import { Article } from './types';
import { fetchArticles } from './thunk-actions';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type ArticlesState = {
  status: 'loading' | 'idle';
  error: string | null;
  articles: Article[];
  searchTerm: string;
};

const initialState = {
  articles: [],
  error: null,
  status: 'idle',
  searchTerm: ''
} as ArticlesState;

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    // fill in primary logic here
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      ({ state, payload });
      state.articles.push(...payload.articles);
      state.status = 'idle';

      if (payload.status !== 'ok') {
        state.error = 'Error fetching result from the API';
      }
    });

    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = 'idle';
    });
  }
});

export const selectStatus = (state: RootState) => state.articles.status;

export const { setSearchTerm } = articlesSlice.actions;

export default articlesSlice.reducer;

// store
// --> slice.ts
// --> selectors.ts
// --> actions.ts
