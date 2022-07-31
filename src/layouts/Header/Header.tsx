import React, { useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopBar from '../TopBar/TopBar';
import styles from './Header.module.scss';
import Logo from '../../assets/MyNews.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HamburgerIcon } from '../../components/icons';

const Header = () => {
  // const { hasTopBar } = useSelector((state) => state.topBar);
  return (
    <>
      {/* {hasTopBar === 'false' && <TopBar />} */}

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="MyNews" />
            </Link>
            <div className={styles.hamburger}>
              <HamburgerIcon />
            </div>
          </div>

          <SearchBar />
        </div>
        <hr />
      </div>
    </>
  );
};
export default Header;
