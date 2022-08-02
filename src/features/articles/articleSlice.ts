import { Article } from './types';
import { fetchArticles } from './thunk-actions';
import { fetchAllArticles } from './thunk-actions';
import { fetchLatestArticles } from './thunk-actions';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

type ArticlesState = {
  status: 'loading' | 'idle' | 'error';
  error: string | null;
  searchTerm: string;
  articles: Article[];
  latestArticles: Article[];
};

const initialState = {
  articles: [],
  latestArticles: [],
  error: null,
  status: 'idle',
  searchTerm: ''
} as ArticlesState;

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
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
      state.articles = payload.articles || [];
      state.status = 'idle';

      if (payload.status !== 'ok') {
        state.error = 'Error fetching result from the API';
      }
    });

    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = 'error';
    });

    builder.addCase(fetchAllArticles.fulfilled, (state, { payload }) => {
      state.articles = payload.slice(0, 13) || [];
      state.status = 'idle';
    });

    builder.addCase(fetchAllArticles.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = 'error';
    });

    builder.addCase(fetchAllArticles.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    builder.addCase(fetchLatestArticles.fulfilled, (state, { payload }) => {
      state.latestArticles = [...state.latestArticles, ...payload.articles];
    });

    builder.addCase(fetchLatestArticles.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = 'error';
    });

    builder.addCase(fetchLatestArticles.pending, (state) => {
      state.error = null;
    });
  }
});

export const selectStatus = (state: RootState) => state.articles.status;

export const selectSearchTerm = (state: RootState) => state.articles.searchTerm;

export const selectErrorMessage = (state: RootState) => state.articles.error;

export const { setSearchTerm } = articlesSlice.actions;

export default articlesSlice.reducer;
