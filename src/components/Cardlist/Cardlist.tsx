import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'components/Card';
import Button from 'components/Button';
import { ProductType } from 'types/types';
import { ENDPOINTS } from 'config/endpoints';
import CardlistTitle from './CardlistTitle/CardlistTitle';
import NotFoundPage from 'pages/NotFoundPage';
import priceFormatter from 'utils/priceFormatter';
import styles from './Cardlist.module.scss';

type CardlistProps = {
  amount: number;
  title: string;
}

const Cardlist: React.FC<CardlistProps> = ({amount, title}) => {

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(ENDPOINTS.products);
        setProducts(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных: ', error);
      }
    };

    fetchData();
  },[]);

  if(!products) {
    return <NotFoundPage type="page" />
  }

  const productsList = products.slice(0, amount) || [];

  return (
    <>
      <CardlistTitle products={products} textContent={title} />
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

export default Cardlist;