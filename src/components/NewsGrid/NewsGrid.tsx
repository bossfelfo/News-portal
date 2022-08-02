import styles from './NewsGrid.module.scss';

interface NewsGridProps {
  children: React.ReactNode;
}

const NewsGrid: React.FC<NewsGridProps> = ({ children }) => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};
export default NewsGrid;
