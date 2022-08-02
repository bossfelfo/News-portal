import { Outlet } from 'react-router-dom';
import { useTypedSelector } from '../store';
import Header from './Header/Header';

import styles from './Layout.module.scss';
import MobileNavBar from './NavBar/MobileNavBar';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar/TopBar';

const Layout = () => {
  const { hasTopBar, isOpenMobileNav } = useTypedSelector((state) => state.app);
  return (
    <>
      {hasTopBar === true && <TopBar />}

      {isOpenMobileNav === false && <MobileNavBar />}

      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.navBar}>
            <NavBar />
          </div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
