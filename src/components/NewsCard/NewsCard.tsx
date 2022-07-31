import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsCard.module.scss';
import { Article } from '../../features/articles/types';

interface Props {
  article: Article;
}

const NewsCard: React.FC<Props> = ({ article }) => {
  const { title, author, url, urlToImage } = article;

  return (
    <a href={url} target="_blank">
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img src={urlToImage || process.env.PUBLIC_URL + '/images/imagePlaceholder.jpg'} alt="" />
        </div>
        <div className={styles.cardContent}>
          <h4>Category</h4>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
