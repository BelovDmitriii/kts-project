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

const ProductPage = observer(() => {

  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    if (parseInt(id ?? '')) productsStore.fetchSingleProduct(id ?? '').then(r => r);
    return () => {
      productsStore.clearSingleProduct();
    }
  }, [id]);

  if (productsStore.isLoading || !productsStore.selectedProduct) {
    return (
      <div className={styles.product_page__loader_container}>
        <Loader size="l" fill="accent" />
      </div>
    );
  }

  if (!productsStore.isLoading && !productsStore.selectedProduct) {
    return <NotFoundPage type={'page'} />;
  }

  return(
    <section className={styles.product_page__wrapper}>
      <Link to="/" className={styles.product_page__link}>
        <ReturnButton />
      </Link>
      <CurrentCard
        className="currentcard_wrapper"
        image={productsStore.selectedProduct.images[0]}
        contentSlot={priceFormatter(productsStore.selectedProduct.price)}
        title={productsStore.selectedProduct.title}
        subtitle={productsStore.selectedProduct.description}/>
      <Cardlist products={productsStore.products} title="Related Items" amount={3}/>
    </section>
  )
})

export default ProductPage;
