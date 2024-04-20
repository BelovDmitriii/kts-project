import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.scss';

const NavigationItem = () => {

  return (
    <div className={styles.navigation_container}>
      <Link to="/" className={styles.navigation_container_link}>
        <div className={styles.navigation_item}>
          Products
        </div>
      </Link>
      <Link to="*" className={styles.navigation_container_link}>
        <div className={styles.navigation_item}>
          Categories
        </div>
      </Link>
      <Link to="*" className={styles.navigation_container_link}>
        <div className={styles.navigation_item}>
          About us
        </div>
      </Link>
    </div>
  )
}

export default NavigationItem;