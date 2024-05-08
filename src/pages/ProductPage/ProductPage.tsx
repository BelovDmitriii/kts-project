import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Cardlist from 'components/Cardlist';
import CurrentCard from 'components/CurrentCard';
import ReturnButton from 'components/ReturnButton';
import Loader from 'components/Loader';
import NotFoundPage from 'pages/NotFoundPage';
import priceFormatter from 'utils/priceFormatter';
import productsStore from 'store/ProductsStore';
import styles from './ProductPage.module.scss';
// import { useLocalStore } from 'utils/useLocalStore';
import { Meta } from 'utils/meta';

const ProductPage = () => {

  // const productsStore = useLocalStore(() => new ProductsStore());

  const { id } = useParams<{ id?: string }>();
  const selectedProduct = productsStore.selectedProduct;

  useEffect(() => {
    if (id) {
      productsStore.fetchSingleProduct(id);
    }
  }, [id]);

  if (productsStore.meta === Meta.loading || !selectedProduct) {
    return (
      <div className={styles.product_page__loader_container}>
        <Loader size="l" fill="accent" />
      </div>
    );
  }

  if (productsStore.meta === Meta.error || !selectedProduct) {
    return <NotFoundPage type={'product'} />;
  }

  return(
    <section className={styles.product_page__wrapper}>
      <Link to="/" className={styles.product_page__link}>
        <ReturnButton />
      </Link>
      <CurrentCard
        className="currentcard_wrapper"
        image={selectedProduct.images[0]}
        contentSlot={priceFormatter(selectedProduct.price)}
        title={selectedProduct.title}
        subtitle={selectedProduct.description}/>
      <Cardlist title="Related Items" amount={3}/>
    </section>
  )
}

export default observer(ProductPage);
