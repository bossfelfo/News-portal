import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../store';
import { ChevronRightIcon } from '../icons';
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
          <h3>
            <strong>Latest news</strong>
          </h3>
        </div>
        <div className={styles.listContent}>
          {latestArticles.map((article, i) => {
            return (
              <div key={i} ref={i + 1 === latestArticles.length ? ref : null}>
                <LatestNewsItem title={article.title} publishedAt={article.publishedAt} url={article.url} />
              </div>
            );
          })}
        </div>
        <div className={styles.listFooter}>
          <Link to="/">
            See all news <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </>
  );
});

export default LatestNewsList;
