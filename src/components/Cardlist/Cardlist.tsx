import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import Card from 'components/Card';
import Button from 'components/Button';
import productsStore from 'store/ProductsStore';
import CardlistTitle from './CardlistTitle/CardlistTitle';
import NotFoundPage from 'pages/NotFoundPage';
import { ProductType } from 'types/types';
import priceFormatter from 'utils/priceFormatter';
import styles from './Cardlist.module.scss';

type CardlistProps = {
  title: string;
  amount?: number;
  products?: ProductType[];
}

const Cardlist: React.FC<CardlistProps> = observer(({title, amount}) => {

  const products = productsStore.products;

  let productsList = products;

  if(!products) {
    return <NotFoundPage type="page" />
  }

  if(amount) {
    productsList = products.slice(0, amount) || [];
  }

  return (
    <>
      <CardlistTitle count={productsStore.productsCount} textContent={title} />
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
})

export default Cardlist;
