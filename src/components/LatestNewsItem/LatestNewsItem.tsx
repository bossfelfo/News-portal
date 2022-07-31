import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LatestNewsItem.module.scss';

const LatestNewsItem = ({}) => {
  return (
    <Link to="/">
      <div className={styles.listContainer}>
        <h4>14:30</h4>
        <p>5 Reasons To Choose A Notebook Over A Computer Desktop</p>
      </div>
    </Link>
  );
};

export default LatestNewsItem;
