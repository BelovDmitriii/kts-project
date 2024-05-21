import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'config/routes';
import Text from 'components/Text';
import styles from './NavigationItem.module.scss';

const NavigationItem = () => {

  const [activeLink, setActiveLink] = React.useState('Products');
  const handleItemClick = (route: string) => {
    setActiveLink(route);
  };

  return (
    <div className={styles.navigation_container}>
      <Link
        to={ROUTES.root}
        className={styles.navigation_container__link}
      >
        <div
          className={`${styles.navigation_item} ${activeLink === 'Products' ? styles.active : ''}`}
          onClick={() => handleItemClick('Products')}>
          <Text view="p-18">Products</Text>
        </div>
      </Link>
      <Link to={ROUTES.notFound}
        className={styles.navigation_container__link}
      >
        <div
          className={`${styles.navigation_item} ${activeLink === 'Categories' ? styles.active : ''}`}
          onClick={() => handleItemClick('Categories')}
        >
          <Text view="p-18">Categories</Text>
        </div>
      </Link>
      <Link to={ROUTES.notFound}
        className={styles.navigation_container__link}
      >
        <div
          className={`${styles.navigation_item} ${activeLink === 'About us' ? styles.active : ''}`}
          onClick={() => handleItemClick('About us')}
        >
          <Text view="p-18">About us</Text>
        </div>
      </Link>
    </div>
  )
}

export default NavigationItem;