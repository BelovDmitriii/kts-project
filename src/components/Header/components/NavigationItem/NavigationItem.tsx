import { Link } from 'react-router-dom';
import Text from 'components/Text';
import styles from './NavigationItem.module.scss';

const NavigationItem = () => {

  return (
    <div className={styles.navigation_container}>
      <Link to="/" className={styles.navigation_container__link}>
        <div className={styles.navigation_item}>
          <Text view='p-18'>Products</Text>
        </div>
      </Link>
      <Link to="*" className={styles.navigation_container__link}>
        <div className={styles.navigation_item}>
          <Text view='p-18'>Categories</Text>
        </div>
      </Link>
      <Link to="*" className={styles.navigation_container__link}>
        <div className={styles.navigation_item}>
          <Text view='p-18'>About us</Text>
        </div>
      </Link>
    </div>
  )
}

export default NavigationItem;