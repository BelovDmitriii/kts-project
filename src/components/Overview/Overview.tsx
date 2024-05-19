import React from 'react';
import Text from '../Text';
import styles from './Overview.module.scss';

const Overview = () => {
  return(
    <section className={styles.overview__container}>
      <Text view="title" weight="bold" color="primary">
        Products
      </Text>
      <Text view="p-20" weight="normal" color="secondary" className={styles.overview__description}>
        We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item
      </Text>
    </section>
  );
}

export default Overview;