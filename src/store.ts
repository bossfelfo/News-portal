import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './features/articles/articleSlice';
import appReducer from './features/app/appSlice';
import topBarReducer from './features/app/appSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    topBar: topBarReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
