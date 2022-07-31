import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AdsCard.module.scss';

const AdsCard: React.FC = ({}) => {
  return (
    <Link to="/">
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <img src={process.env.PUBLIC_URL + '/images/placeHolder.jpg'} alt="" />
          <div className={styles.cardLabel}>
            <p>Ad</p>
          </div>
        </div>
        <div className={styles.cardContent}>
          <h4>programmatic/native ady</h4>
          <h2>Compare Prices Find The Best Computer Accessory</h2>
          <p>Gary Weber</p>
        </div>
      </div>
    </Link>
  );
};
export default AdsCard;
