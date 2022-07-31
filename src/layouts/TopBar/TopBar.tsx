import React from 'react';
import styles from './TopBar.module.scss';
import topbarBackgroundImage from '../../assets/topbarBackgroundImage.png';

function TopBar() {
  return (
    <div
      className={styles.topbar}
      style={{ backgroundImage: `url(${topbarBackgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className={styles.container}>
        <h2>Make MyNews your homepage</h2>
        <p>Every day discover what&apos;s trending on the internet!</p>
        <div className={styles.cta}>
          <button className={styles.primary}>Get</button>
          <button className={styles.secondary}>No, thanks</button>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
