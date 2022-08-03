import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AdsCard from '../../components/AdsCard/AdsCard';
import NewsCard from '../../components/NewsCard/NewsCard';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import { fetchArticles } from '../../features/articles/thunk-actions';
import { useAppDispatch, useTypedSelector } from '../../store';
import { Category } from '../../features/articles/types';
import { selectErrorMessage, selectSearchTerm, selectStatus } from '../../features/articles/articleSlice';

import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
  const params = useParams();
  const category = params.category as Category;
  const dispatch = useAppDispatch();
  const { articles } = useTypedSelector((state) => state.articles);
  const loadingStatus = useTypedSelector(selectStatus);
  const errorMessage = useTypedSelector(selectErrorMessage);
  const searchTerm = useTypedSelector(selectSearchTerm);
  const articlesTrimmed = articles;
  const categoryArticles = searchTerm
    ? articlesTrimmed.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()))
    : articlesTrimmed;

  useEffect(() => {
    dispatch(fetchArticles({ category }));
  }, [dispatch, params.category]);

  return (
    <div className={styles.container}>
      <h2>{category}</h2>
      {loadingStatus === 'loading' ? (
        <span className={styles.container}>Loading...</span>
      ) : loadingStatus === 'error' ? (
        <span className={styles.container}>{errorMessage}</span>
      ) : categoryArticles.length > 0 ? (
        <NewsGrid>
          {categoryArticles.map((article, i) => {
            return (
              <>
                {i % 5 === 0 && i !== 0 && <AdsCard key={i} />}
                <NewsCard article={article} key={article.id} />
              </>
            );
          })}
        </NewsGrid>
      ) : (
        <span className={styles.container}>No articles found.</span>
      )}
    </div>
  );
};

export default CategoryPage;
