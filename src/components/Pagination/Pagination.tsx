import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div className={styles.pagination_container}>
      <div className={styles.left_arrow}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.12 26.5599L11.4267 17.8666C10.4 16.8399 10.4 15.1599 11.4267 14.1333L20.12 5.43994" stroke="#AFADB5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      </div>
      <div className={styles.page_numbers}>
        <div className={styles.page_numbers_item}>
          1
        </div>
        <div className={styles.page_numbers_item}>
          2
        </div>
        <div className={styles.page_numbers_item}>
          3
        </div>
        <div className={styles.page_numbers_item}>
          ...
        </div>
        <div className={styles.page_numbers_item}>
          10
        </div>
      </div>
      <div className={styles.right_arrow}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.88 26.5599L20.5733 17.8666C21.6 16.8399 21.6 15.1599 20.5733 14.1333L11.88 5.43994" stroke="#151411" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default Pagination;