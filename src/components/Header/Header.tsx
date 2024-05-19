import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './components/Cart';
import Logo from './components/Logo';
import NavigationItem from './components/NavigationItem';
import ProfileIcon from './components/ProfileIcon';
import { ROUTES } from 'config/routes';
import styles from './Header.module.scss';


const Header = () => {
  return(
    <header className={styles.container}>
      <Link to={ROUTES.root}>
        <Logo />
      </Link>
      <NavigationItem />
      <div className={styles.account}>
        <Cart />
        <ProfileIcon />
      </div>
    </header>
  );
}

export default Header;