import { createAsyncThunk } from '@reduxjs/toolkit';

import { Article, Category } from './types';

const env = {
  API_URL: process.env.REACT_APP_API_URL || process.env.API_URL,
  API_TOKEN: process.env.REACT_APP_API_TOKEN || process.env.API_TOKEN
};

interface FetchArticlesError {
  message: string;
}
interface FetchArticlesResponse {
  articles: Article[];
  totalResults: number;
  status: string;
}

interface RequestParams {
  category: Category;
  limit?: number;
}

const fetchNewsArticles = async ({ category, limit = 13 }: RequestParams) => {
  const result = await fetch(
    `${env.API_URL}/top-headlines?country=us&category=${category}&sortBy=publishedAt&apiKey=${env.API_TOKEN}&pageSize=${limit}`
  ).then((res) => res.json());

  return { ...result, articles: result.articles.map((a: Article) => ({ ...a, category })) };
};

export const fetchArticles = createAsyncThunk<
  FetchArticlesResponse,
  RequestParams,
  { rejectValue: FetchArticlesError }
>('articles/fetch', async (params, thunkApi) => {
  let data = {} as FetchArticlesResponse;

  try {
    data = await fetchNewsArticles(params);
  } catch (error) {
    thunkApi.rejectWithValue({
      message: (error as Error).message || 'Failed to fetch article.'
    });
  }

  return data;
});

export const fetchAllArticles = createAsyncThunk<Article[], void, { rejectValue: FetchArticlesError }>(
  'articles/fetchAll',
  async (_, thunkApi) => {
    const limit = 5;
    let allArticles: Article[] = [];

    try {
      const categoriesArticles = await Promise.all([
        fetchNewsArticles({ category: 'general', limit }),
        fetchNewsArticles({ category: 'business', limit }),
        fetchNewsArticles({ category: 'health', limit }),
        fetchNewsArticles({ category: 'science', limit }),
        fetchNewsArticles({ category: 'sports', limit }),
        fetchNewsArticles({ category: 'technology', limit })
      ]);

      allArticles = categoriesArticles.flatMap((res) => res.articles).sort(() => Math.random() - 0.5);
    } catch (error) {
      thunkApi.rejectWithValue({ message: (error as Error).message || 'Failed to fetch all article.' });
    }

    return allArticles;
  }
);

export const fetchLatestArticles = createAsyncThunk<
  FetchArticlesResponse,
  { pageNum?: number },
  { rejectValue: FetchArticlesError }
>('articles/fetchLatest', async ({ pageNum = 1 }, thunkApi) => {
  let response = {} as FetchArticlesResponse;
  const url = `${env.API_URL}/top-headlines?sortBy=publishedAt&country=us&apiKey=${env.API_TOKEN}&pageSize=10&page=${pageNum}`;

  try {
    response = await (await fetch(url)).json();
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: (error as Error).message || 'Failed to fetch latest articles.'
    });
  }

  return response;
});
