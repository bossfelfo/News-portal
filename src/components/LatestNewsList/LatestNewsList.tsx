import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store';
import LatestNewsItem from '../LatestNewsItem/LatestNewsItem';
import styles from './LatestNewsList.module.scss';

const LatestNewsList = forwardRef<HTMLDivElement | null>((_, ref) => {
  const { latestArticles } = useTypedSelector((state) => state.articles);

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
          {latestArticles.map((ar, i) => {
            return (
              <div key={i} ref={i + 1 === latestArticles.length ? ref : null}>
                <LatestNewsItem title={ar.title} publishedAt={ar.publishedAt} url={ar.url} />
              </div>
            );
          })}
        </div>
        <div className={styles.listFooter}>
          <Link to="/">See all news</Link>
        </div>
      </div>
    </>
  );
});

export default LatestNewsList;
