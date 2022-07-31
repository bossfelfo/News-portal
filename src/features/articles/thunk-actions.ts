import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article } from './types';

const env = {
  API_URL: process.env.REACT_APP_API_URL,
  API_TOKEN: process.env.REACT_APP_API_TOKEN
};

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
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=&{query}&apiKey=${env.API_TOKEN}`;

  if (limit) {
    url += `&pageSize=${limit}`;
  }
  if (query === '/') {
    url += `&q=${query}`;
  }
  const response = await fetch(url);

  // if ()
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch news.'
    });
  }

  const data: FetchArticlesResponse = await response.json();

  return data;
});
