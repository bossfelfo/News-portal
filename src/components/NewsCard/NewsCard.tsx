import React from 'react';
import styles from './NewsCard.module.scss';
import { Article } from '../../features/articles/types';
import { BookmarkIcon } from '../icons';

interface NewsCardProps {
  article: Article;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { title, author, url, urlToImage, category } = article;

  return (
    <a href={url} target="_blank">
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img src={urlToImage || process.env.PUBLIC_URL + '/images/imagePlaceholder.jpg'} alt="" />
        </div>
        <div className={styles.cardContent}>
          <h4>{category}</h4>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
