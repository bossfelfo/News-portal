import styles from './TopBar.module.scss';
import topbarBackgroundImage from '../../assets/topbarBackgroundImage.png';
import { useAppDispatch } from '../../store';
import { closeTopBar } from '../../features/app/appSlice';

const TopBar = ({}) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(closeTopBar());
  };

  // const url = 'localhost';
  // const setHomepage = (url: string) => {
  //   if (document.all) {
  //     document.body.style.behavior = 'url(#default#homepage)';
  //     document.body.setHomePage(url);
  //   } else if (window.sidebar) {
  //     if (window.netscape) {
  //       try {
  //         netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
  //       } catch (e) {
  //         alert(
  //           'Cannot set homepage due to browser permissions. Enter website manually or if you wish to enable this functionality, enter about:config in your address bar and change the value of signed.applets.codebase_principal_support to true'
  //         );
  //       }
  //     }
  //     const prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(
  //       Components.interfaces.nsIPrefBranch
  //     );
  //     prefs.setCharPref('browser.startup.homepage', url);
  //   }
  // };

  return (
    <div
      className={styles.topbar}
      style={{ backgroundImage: `url(${topbarBackgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className={styles.container}>
        <h2>Make MyNews your homepage</h2>
        <p>Every day discover what&apos;s trending on the internet!</p>
        <div className={styles.cta}>
          <button
            className={styles.primary}
            onClick={() => {
              //
            }}
          >
            Get
          </button>
          <button
            className={styles.secondary}
            onClick={() => {
              handleClose();
            }}
          >
            No, thanks
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
