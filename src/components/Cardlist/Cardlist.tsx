import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Card from 'components/Card';
import Button from 'components/Button';
import Loader from 'components/Loader';
// import { useLocalStore } from 'utils/useLocalStore';
import productsStore from 'store/ProductsStore';
import CardlistTitle from './CardlistTitle/CardlistTitle';
import NotFoundPage from 'pages/NotFoundPage';
import { ProductType } from 'types/types';
import priceFormatter from 'utils/priceFormatter';
import { Meta } from 'utils/meta';
import styles from './Cardlist.module.scss';
import React from 'react';

type CardlistProps = {
  title: string;
  amount?: number;
}

const Cardlist: React.FC<CardlistProps> = ({title, amount}) => {

  React.useEffect(() => {
    productsStore.fetchProducts();
  },[]);

  const products = productsStore.products;

  if(!products) {
    return <NotFoundPage type="page" />
  }

  if(amount) {
    products.slice(0, amount) || [];
  }

  return (
    <>
      {productsStore.meta === Meta.loading &&
      <div className={styles.loader_container}>
        <Loader size="l" fill="accent" />
      </div>
      }
      <CardlistTitle count={products.length} textContent={title} />
      <section className={styles.cardlist__items}>
        {products.map((product: ProductType) => (
          <Link key={product.id} to={`/${product.id}`} className={styles.cardlist__item}>
            <Card
              key={product.id}
              image={product.images[0]}
              contentSlot={priceFormatter(product.price)}
              actionSlot={<Button>Add to Cart</Button>}
              title={product.title}
              subtitle={product.description}
              captionSlot={product.category.name}
            />
          </Link>
        ))}
      </section>
    </>
  )
}

export default observer(Cardlist);
