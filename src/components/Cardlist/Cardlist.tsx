import Card from '../Card/Card';
import Button from '../Button';
import styles from './Cardlist.module.scss';
import { Link } from 'react-router-dom';
import { ProductType } from '../../types/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/consts';
import CardlistTitle from './CardlistTitle/CardlistTitle';

type CardlistProps = {
  amount: number;
  title: string;
}

const Cardlist: React.FC<CardlistProps> = ({amount, title}) => {

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке данных: ', error);
      }
    };

    fetchData();
  },[]);

  const productsList = products.slice(0, amount) || [];

  return (
    <>
      <CardlistTitle products={products} textContent={title} />
      <section className={styles.cardlist_items}>
        {productsList.map((product: ProductType) => (
          <Link key={product.id} to={`/${product.id}`} className={styles.cardlist_item}>
            <Card
              key={product.id}
              image={product.images[0]}
              contentSlot={`$ ${product.price}`}
              actionSlot={<Button children='Add to Cart'/>}
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