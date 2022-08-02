import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import styles from './NavBar.module.scss';
import { NAV_ITEMS } from '../../utils/navIconHelper';
import { closeMobileNav } from '../../features/app/appSlice';
import { useAppDispatch } from '../../store';

const NavBar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul>
        {NAV_ITEMS.map((navItem) => (
          <li key={navItem.link}>
            <Link
              to={navItem.link}
              onClick={() => {
                dispatch(closeMobileNav());
              }}
              className={classNames(styles.container, { [styles.active]: pathname === navItem.link })}
            >
              {navItem.icon}
              <span>{navItem.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
