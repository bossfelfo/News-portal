import React from 'react';
import { Link } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '../../components/icons';
import { closeMobileNav } from '../../features/app/appSlice';
import { useAppDispatch } from '../../store';
// import Header from '../Header/Header';
import NavBar from './NavBar';
import styles from './NavBar.module.scss';
import Logo from '../../assets/MyNews.png';
import SearchBar from '../SearchBar/SearchBar';

const MobileNavBar = ({}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.mobileNav}>
      {/* <div
        onClick={(e) => {
          e.preventDefault();
          dispatch(closeMobileNav());
        }}
        className={styles.close}
      >
        <CloseIcon />
      </div> */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={Logo} alt="MyNews" />
        </Link>
      </div>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div className={styles.nav}>
        <NavBar />
      </div>
    </div>
  );
};
export default MobileNavBar;
