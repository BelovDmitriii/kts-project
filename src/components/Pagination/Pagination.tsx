import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import ArrowRightIcon from 'components/icons/ArrowRightIcon';
import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div className={styles.pagination_container}>
      <div className={styles.left_arrow}>
        <ArrowLeftIcon width={32} height={32} color="accent"/>
      </div>
      <div className={styles['page-numbers']}>
        <div className={styles['page-numbers__item']}>
          1
        </div>
        <div className={styles['page-numbers__item']}>
          2
        </div>
        <div className={styles['page-numbers__item']}>
          3
        </div>
        <div className={styles['page-numbers__item']}>
          ...
        </div>
        <div className={styles['page-numbers__item']}>
          10
        </div>
      </div>
      <div className={styles.right_arrow}>
        <ArrowRightIcon width={32} height={32} color="accent" />
      </div>
    </div>
  )
}

export default Pagination;