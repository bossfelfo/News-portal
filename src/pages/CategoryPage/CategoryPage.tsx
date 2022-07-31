import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AdsCard from '../../components/AdsCard/AdsCard';
import NewsCard from '../../components/NewsCard/NewsCard';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import { fetchArticles } from '../../features/articles/thunk-actions';
import { Article } from '../../features/articles/types';
import { useAppDispatch, useTypedSelector } from '../../store';
import { RootState } from '../../store';

const CategoryPage = () => {
  const { category } = useParams();
  const { articles } = useTypedSelector((state) => state.articles);
  const loadingStatus = useTypedSelector((state) => state.articles.status);

  useEffect(() => {
    fetchArticles({ query: category });
  }, [category]);

  if (loadingStatus === 'loading') return <span>'loading'</span>;

  return (
    <>
      <span>{category}</span>;
      <NewsGrid>
        {articles.map((ar, i) => {
          return i % 5 === 0 && i !== 0 ? (
            <>
              <AdsCard />
              <NewsCard article={ar} key={ar.id} />
            </>
          ) : (
            <NewsCard article={ar} key={ar.id} />
          );
        })}
      </NewsGrid>
    </>
  );
};

export default CategoryPage;
