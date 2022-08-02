import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.scss';
import Logo from '../../assets/MyNews.png';
import { Link } from 'react-router-dom';
import { CloseIcon, HamburgerIcon } from '../../components/icons';
import { useAppDispatch, useTypedSelector } from '../../store';
import { closeMobileNav } from '../../features/app/appSlice';

const Header = () => {
  const { isOpenMobileNav } = useTypedSelector((state) => state.app);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="MyNews" />
            </Link>
            <div className={styles.hamburger}>
              {isOpenMobileNav === false ? (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(closeMobileNav());
                  }}
                >
                  <CloseIcon />
                </div>
              ) : (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(closeMobileNav());
                  }}
                >
                  <HamburgerIcon />
                </div>
              )}
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
