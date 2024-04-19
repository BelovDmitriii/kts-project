import styles from './Overview.module.scss';
import Text from '../Text';

const Overview = () => {
  return(
    <section className={styles.overview_container}>
      <Text view='title' weight='bold' color='primary' className={styles.overview_title}>
        Products
      </Text>
      <Text view='p-20' weight='normal' color='secondary' className={styles.overview_description}>
        We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item
      </Text>
    </section>
  );
}

export default Overview;