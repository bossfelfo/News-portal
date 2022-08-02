import { Link } from 'react-router-dom';
import styles from './BreakingNewsCard.module.scss';

const BreakingNewsCard = ({}) => {
  return (
    <div className={styles.cardContainer}>
      <Link to="/">
        <div className={styles.cardContent}>
          <div className={styles.cardLabel}>
            <h4>breaking</h4>
          </div>
          <h2>Peace On Earth A Wonderful Wish But No Way</h2>
          <p>Bertie Campbell</p>
        </div>
      </Link>
    </div>
  );
};
export default BreakingNewsCard;
