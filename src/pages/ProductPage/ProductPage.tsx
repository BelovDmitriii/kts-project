import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useLocalStore } from 'utils/useLocalStore';
import SingleProductStore from 'store/SingleProductStore';
import Cardlist from 'components/Cardlist';
import CurrentCard from 'components/CurrentCard';
import ReturnButton from 'components/ReturnButton';
import Loader from 'components/Loader';
import NotFoundPage from 'pages/NotFoundPage';
import priceFormatter from 'utils/priceFormatter';
import ProductsStore, {ProductsStoreProvider} from 'store/ProductsStore';
import styles from './ProductPage.module.scss';

const ProductPage = () => {

  const { id } = useParams<{ id?: string }>();
  const singleProductStore = useLocalStore(() => new SingleProductStore());
  const product = singleProductStore.product;
  const productsStore = new ProductsStore();

  React.useEffect(() => {
    if (id) {
      singleProductStore.fetchProduct(id);
    }
  }, [id, singleProductStore]);

  if (singleProductStore.meta.isLoading || !product) {
    return (
      <div className={styles.product_page__loader_container}>
        <Loader size="l" fill="accent" />
      </div>
    );
  }

  if (singleProductStore.meta.isError || !product) {
    return <NotFoundPage type={'product'} />;
  }

  return(
    <section className={styles.product_page__wrapper}>
      <Link to="/" className={styles.product_page__link}>
        <ReturnButton />
      </Link>
      <CurrentCard
        className="currentcard_wrapper"
        images={product.images}
        contentSlot={priceFormatter(product.price)}
        title={product.title}
        subtitle={product.description}/>
      <ProductsStoreProvider store={productsStore}>
        <Cardlist title="Related Items" amount={3}/>
      </ProductsStoreProvider>
    </section>
  )
}

export default observer(ProductPage);
