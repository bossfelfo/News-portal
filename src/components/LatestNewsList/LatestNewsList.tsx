import React from 'react';
import { Link } from 'react-router-dom';
import LatestNewsItem from '../LatestNewsItem/LatestNewsItem';
import styles from './LatestNewsList.module.scss';

function LatestNewsList() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.listHeader}>
          <div className={styles.outerDot}>
            <div className={styles.innerDot}></div>
          </div>
          <h2>Latest News</h2>
        </div>
        <div className={styles.listContent}>
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
          <LatestNewsItem />
        </div>
        <div className={styles.listFooter}>
          <Link to="/">See all news</Link>
        </div>
      </div>
    </>
  );
}

export default LatestNewsList;
