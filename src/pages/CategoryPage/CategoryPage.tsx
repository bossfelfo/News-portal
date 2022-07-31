import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../../features/articles/thunk-actions';
import { RootState } from '../../store';

const CategoryPage = () => {
  const { category } = useParams();
  const { articles } = useSelector((state: RootState) => state.articles);
  const loadingStatus = useSelector((state: RootState) => state.articles.status);

  useEffect(() => {
    fetchArticles({ query: category });
  }, [category]);

  if (loadingStatus === 'loading') return <span>'loading'</span>;

  return <span>{category}</span>;
};

export default CategoryPage;
