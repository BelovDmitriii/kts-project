import styles from './NavigationItem.module.scss';

const NavigationItem = () => {
  return (
    <div className={styles.navigation_container}>
      <div className={styles.navigation_item}>
        Products
      </div>
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