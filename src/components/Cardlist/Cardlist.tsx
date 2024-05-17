import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ProductsStoreContext } from '../../pages/MainPage/ProductsStoreProvider';
import Card from 'components/Card';
import Button from 'components/Button';
import Loader from 'components/Loader';
import CardlistTitle from './CardlistTitle/CardlistTitle';
import NotFoundPage from 'pages/NotFoundPage';
import { ProductType } from 'types/types';
import priceFormatter from 'utils/priceFormatter';
import styles from './Cardlist.module.scss';

type CardlistProps = {
  title: string;
  amount?: number;
}

const Cardlist: React.FC<CardlistProps> = ({title}) => {

  const productsStore = useContext(ProductsStoreContext);

  React.useEffect(() => {
    productsStore?.fetchProducts && productsStore.fetchProducts();
    productsStore?.fetchTotalProducts && productsStore.fetchTotalProducts();
  },[productsStore]);

  if (!productsStore) return null;

  const productsList = productsStore.getProducts();

  if(!productsList) {
    return <NotFoundPage type="page" />
  }

  return (
    <>
      {productsStore.meta.isLoading &&
      <div className={styles.loader_container}>
        <Loader size="l" fill="accent" />
      </div>
      }
      <CardlistTitle count={productsStore.totalProducts} textContent={title} />
      <section className={styles.cardlist__items}>
        {productsList.map((product: ProductType) => (
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
