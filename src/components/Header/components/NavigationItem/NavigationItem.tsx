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
      <div className={styles.navigation_item}>
        Categories
      </div>
      <div className={styles.navigation_item}>
        About us
      </div>
    </div>
  )
}

export default NavigationItem;