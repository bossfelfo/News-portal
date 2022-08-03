import classNames from 'classnames';
import { useEffect, useRef, useState, forwardRef } from 'react';
import AdsCard from '../../components/AdsCard/AdsCard';

import BreakingNewsCard from '../../components/BreakingNewsCard/BreakingNewsCard';
import LatestNewsList from '../../components/LatestNewsList/LatestNewsList';
import NewsCard from '../../components/NewsCard/NewsCard';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import { selectErrorMessage, selectSearchTerm, selectStatus } from '../../features/articles/articleSlice';
import { fetchAllArticles, fetchLatestArticles } from '../../features/articles/thunk-actions';
import { useAppDispatch, useTypedSelector } from '../../store';

import styles from './HomePage.module.scss';

type TabType = 'featured' | 'latest';

const HomeArticles = forwardRef<HTMLDivElement | null>((_, ref) => {
  const searchTerm = useTypedSelector(selectSearchTerm);
  const { articles } = useTypedSelector((state) => state.articles);
  const allArticles = searchTerm
    ? articles.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()))
    : articles;

  return (
    <NewsGrid>
      {allArticles.map((article, i) => {
        return (
          <>
            {i % 5 === 0 && i !== 0 && <AdsCard key={i} />}
            <NewsCard article={article} key={article.id} />
          </>
        );
      })}

      {allArticles.length > 0 && <BreakingNewsCard />}

      <div className={styles.listContainer}>
        <LatestNewsList ref={ref} />
      </div>
    </NewsGrid>
  );
});

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('featured');
  const loadingStatus = useTypedSelector(selectStatus);
  const errorMessage = useTypedSelector(selectErrorMessage);

  const isMounted = useRef(false);
  const latestNewsFetched = useRef(0);
  const [divRef, setDivRef] = useState<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const handleTabChange = (tab: TabType) => setActiveTab(tab);

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(fetchAllArticles());
      isMounted.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (latestNewsFetched.current < 1) {
      dispatch(fetchLatestArticles({ pageNum: 1 }));
      latestNewsFetched.current++;
    }
  }, []);

  useEffect(() => {
    if (!divRef) return;

    const callback = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && latestNewsFetched.current < 2) {
        dispatch(fetchLatestArticles({ pageNum: 2 }));
        latestNewsFetched.current++;
      }
    };

    const observer = new IntersectionObserver(callback);

    observer.observe(divRef);

    return () => {
      observer.disconnect();
    };
  }, [dispatch, divRef]);

  return (
    <>
      <div className={styles.tabs}>
        <ul>
          <li
            className={classNames({ [styles.active]: activeTab === 'featured' })}
            onClick={() => handleTabChange('featured')}
          >
            Featured
          </li>
          <li
            className={classNames({ [styles.active]: activeTab === 'latest' })}
            onClick={() => handleTabChange('latest')}
          >
            Latest
          </li>
        </ul>
      </div>
      <div className={styles.outletContent}>
        {activeTab === 'featured' && <HomeArticles ref={setDivRef} />}
        {activeTab === 'latest' && <LatestNewsList ref={setDivRef} />}
      </div>
      <div className={styles.content}>
        <h2>News</h2>
        {loadingStatus === 'loading' ? (
          <span className={styles.container}>Loading...</span>
        ) : loadingStatus === 'error' ? (
          <span className={styles.container}>{errorMessage}</span>
        ) : (
          <HomeArticles ref={setDivRef} />
        )}
      </div>
    </>
  );
};

export default HomePage;
