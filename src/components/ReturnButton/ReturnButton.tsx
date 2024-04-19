import Text from '../Text';
import styles from './ReturnButton.module.scss';

const ReturnButton = () => {
  return (
    <div className={styles.return_container}>
      <div className={styles.return_arrow}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </div>
      <div className={styles.return_text}>
        <Text view='p-20' children='Назад' color='primary' tag='span'/>
      </div>
    </div>
  )
}

export default ReturnButton