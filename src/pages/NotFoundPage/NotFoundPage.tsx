import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const variants = {
  page: {text: 'Page Not Found', o: '😵'},
  product: {text: 'We have no products with that ID', o: '🥺'}
};

type NotFoundPageProps = {
  type: keyof typeof variants;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ type }) => {

  return(
    <section className={styles.not_found_page} >
      <b className={styles.not_found_page__text} >
        {`4${variants[type].o}4`}
      </b>
      <p className={styles.not_found_page__title} style={{}}>{`Ooops! ${variants[type].text}`}</p>
      <div className={styles.not_found_page__footer} >
        <Link to='/' className={styles.not_found_page__link}>
          Return to main page
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
