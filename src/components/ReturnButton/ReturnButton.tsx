import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import Text from '../Text';
import styles from './ReturnButton.module.scss';

const ReturnButton = () => {
  return (
    <div className={styles.return_button__container}>
      <div className={styles.return_button__arrow}>
        <ArrowLeftIcon width={32} height={32} color="primary"/>
      </div>
        <Text view="p-20" color="primary" tag="span" children="Назад"/>
    </div>
  )
}

export default ReturnButton