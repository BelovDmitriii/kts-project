import styles from './Header.module.scss';
import Cart from './components/Cart';
import Logo from './components/Logo';
import NavigationItem from './components/NavigationItem';
import ProfileIcon from './components/ProfileIcon';

const Header = () => {
  return(
    <header className={styles.container}>
      <Logo />
      <NavigationItem />
      <div className={styles.account}>
        <Cart />
        <ProfileIcon />
      </div>
    </header>
  );
}

export default Header;