import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from './types';

// `createAsyncThunk` is a generic function.
// We can use the first type-parameter
// to tell what type will be returned as a result.

// This type describes the error object structure:
type FetchArticlesError = {
  message: string;
};

interface FetchArticlesResponse {
  articles: Article[];
  totalResults: number;
  status: string;
}

export const fetchArticles = createAsyncThunk<
  FetchArticlesResponse,
  { query?: string; limit?: number },
  { rejectValue: FetchArticlesError }
>('articles/fetch', async ({ query, limit }, thunkApi) => {
  let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=0b75869c6a864ce4a0db0af7d59bf74e';

  if (query) {
    url += `&q=${query}`;
  }

  if (limit) {
    url += `&pageSize=${limit}`;
  }

  const response = await fetch(url);

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch news.'
    });
  }

  const data: FetchArticlesResponse = await response.json();

  return data;
});
