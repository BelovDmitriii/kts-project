import { useEffect, useState } from 'react';
import axios from 'axios';
import Cardlist from 'components/Cardlist';
import CurrentCard from 'components/CurrentCard';
import ReturnButton from 'components/ReturnButton';
import styles from './ProductPage.module.scss';
import { ProductType } from 'types/types';
import { ENDPOINTS } from 'config/endpoints';
import { Link, useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import NotFoundPage from '../NotFoundPage';

const ProductPage = () => {

  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try{
        const response = await axios.get(`${ENDPOINTS.products}/${id}`);
        setProduct(response.data);
      } catch (error){
        console.error('Ошибка при загрузке: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if(isLoading){
    return (
      <div className={styles.product_page__loader_container}>
        <Loader size='l' fill='accent' />
      </div>
    );
  }

  if (!product) {
    return <NotFoundPage type={'page'} />;
  }

  return(
    <section className={styles.product_page__wrapper}>
      <Link to="/" className={styles.product_page__link}>
        <ReturnButton />
      </Link>
      <CurrentCard
        className='currentcard_wrapper'
        image={product.images[0]}
        contentSlot={'$' + product.price}
        title={product.title}
        subtitle={product.description}/>
      <Cardlist amount={3} title='Related Items'/>
    </section>
  )
}

export default ProductPage;