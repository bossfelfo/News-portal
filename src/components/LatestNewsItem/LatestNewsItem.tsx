import React from 'react';
import styles from './LatestNewsItem.module.scss';

interface LatestNewsItemProps {
  title: string;
  publishedAt: string;
  url: string;
}

const formatTime = (dateString: string) => {
  const date = new Date(dateString);

  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

const LatestNewsItem: React.FC<LatestNewsItemProps> = ({ title, publishedAt, url }) => {
  return (
    <a href={url} target="_blank">
      <div className={styles.listContainer}>
        <h4>{formatTime(publishedAt)}</h4>
        <p>{title}</p>
      </div>
    </a>
  );
};

export default LatestNewsItem;
