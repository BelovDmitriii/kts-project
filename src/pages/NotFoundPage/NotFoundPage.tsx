import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const variants = {
  page: {text: 'Page Not Found', o: '😵'},
  product: {text: 'We have no products with that ID', o: '🥺'}
};

type NotFoundPageProps = {
  type: keyof typeof variants;
}

function NotFoundPage({type}: NotFoundPageProps): JSX.Element {

  return(
    <section className={styles.not_found_page} >
      <b className={styles.not_found_page_text} >
        {`4${variants[type].o}4`}
      </b>
      <p className={styles.not_found_page_title} style={{}}>{`Ooops! ${variants[type].text}`}</p>
      <div className={styles.not_found_page_footer} >
        <Link to='/' className={styles.not_found_page_link}>
          Return to main page
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
