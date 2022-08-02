import React from 'react';
import { useAppDispatch } from '../../store';
// import Header from '../Header/Header';
import NavBar from './NavBar';
import styles from './NavBar.module.scss';

const MobileNavBar = ({}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.mobileNav}>
      <NavBar />
    </div>
  );
};
export default MobileNavBar;
