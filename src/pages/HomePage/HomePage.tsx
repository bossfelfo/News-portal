import { AnyAction } from '@reduxjs/toolkit';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import BreakingNewsCard from '../../components/BreakingNewsCard/BreakingNewsCard';
import LatestNewsList from '../../components/LatestNewsList/LatestNewsList';
import NewsCard from '../../components/NewsCard/NewsCard';
import NewsGrid from '../../components/NewsGrid/NewsGrid';
import { fetchArticles } from '../../features/articles/thunk-actions';
import { Article } from '../../features/articles/types';
import { useAppDispatch, useTypedSelector } from '../../store';

import styles from './HomePage.module.scss';

type TabType = 'featured' | 'latest';

interface HomeArticleProps {
  articles: Article[];
}

const HomeArticles = ({ articles }: HomeArticleProps) => {
  return (
    <NewsGrid>
      {articles.map((ar) => (
        <NewsCard article={ar} key={ar.id} />
      ))}
      <BreakingNewsCard />
      <div className={styles.listContainer}>
        <LatestNewsList />
      </div>
    </NewsGrid>
  );
};

const HomePage: React.FC = ({}) => {
  const dispatch = useAppDispatch();
  const { articles } = useTypedSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles({}) as unknown as AnyAction);
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState<TabType>('featured');

  const handleTabChange = (tab: TabType) => setActiveTab(tab);

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
        {activeTab === 'featured' && <HomeArticles articles={articles} />}
        {activeTab === 'latest' && <LatestNewsList />}
      </div>
      <div className={styles.content}>
        <HomeArticles articles={articles} />
      </div>
    </>
  );
};

export default HomePage;
