import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

import styles from './Layout.module.scss';
import NavBar from './SideNavBar/NavBar';
import TopBar from './TopBar/TopBar';

const Layout = () => {
  return (
    <>
      <TopBar />
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
