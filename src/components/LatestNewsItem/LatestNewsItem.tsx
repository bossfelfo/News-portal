import styles from './LatestNewsItem.module.scss';

const formatTime = (dateString: string) => {
  const date = new Date(dateString);

  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

const LatestNewsItem = ({ title, publishedAt, url }: { title: string; publishedAt: string; url: string }) => {
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
