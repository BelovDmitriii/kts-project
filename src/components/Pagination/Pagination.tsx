import { observer } from 'mobx-react-lite';
import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import ArrowRightIcon from 'components/icons/ArrowRightIcon';
import productsStore from 'store/ProductsStore';
import { PRODUCTS_COUNT } from 'store/ProductsStore/ProductsStore';
import classNames from 'classnames';
import styles from './Pagination.module.scss';

const Pagination: React.FC = observer(() => {
  const currentPage = productsStore.currentPage;
  const totalPages = Math.ceil(productsStore.productsCount / PRODUCTS_COUNT);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const pageNumbers: (number | 'left...' | 'right...')[] = [1];

  if (currentPage === 4) {
    pageNumbers.push('left...');
  }

  if (currentPage >= 3) {
    pageNumbers.push(currentPage - 1);
  }

  if (currentPage !== 1) {
    pageNumbers.push(currentPage);
  }

  if (totalPages - currentPage > 1) {
    pageNumbers.push(currentPage + 1);
  }

  if (totalPages - currentPage > 2) {
    pageNumbers.push('right...');
    pageNumbers.push(totalPages);
  }

  const handlePageChange = (page: number) => {
    productsStore.setCurrentPage(page);
  };

  const handleNextPageChange = () => {
    productsStore.setNextCurrentPage();
  };

  const handlePrevPageChange = () => {
    productsStore.setPrevCurrentPage();
  };


  return (
    <div className={styles.pagination_container}>
      <ArrowLeftIcon
        className={styles.arrow_icon}
        width={32}
        height={32}
        color={isFirstPage ? 'secondary' : 'accent'}
        onClick={isFirstPage ? undefined : handlePrevPageChange}
      />
      <div className={styles.page_numbers}>
        {pageNumbers.map((page) => typeof page === 'number' ? (
          <div
            key={page}
            className={classNames(styles.page_numbers__item, (currentPage === page) && styles.active_page)}
            onClick={() =>  typeof page === 'number' && handlePageChange(page)}
          >
            {page}
          </div>
        ) : (
          <div key={page} className={styles.page_numbers__item}>...</div>
        ))}
      </div>
      <ArrowRightIcon
        className={styles.arrow_icon}
        width={32}
        height={32}
        color={isLastPage ? 'secondary' : 'accent'}
        onClick={isLastPage ? undefined : handleNextPageChange}
      />
    </div>
  )
});

export default Pagination;
