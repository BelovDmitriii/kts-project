import React from 'react';
import { observer } from 'mobx-react-lite';
import ReactPaginate from 'react-paginate';
import { ProductsStoreContext } from 'pages/MainPage/ProductsStoreProvider';
import ArrowLeftIcon from 'components/icons/ArrowLeftIcon';
import ArrowRightIcon from 'components/icons/ArrowRightIcon';
import styles from './Pagination.module.scss';

const Pagination = observer(() => {
  const productsStore = React.useContext(ProductsStoreContext);

  const paginationStore = productsStore.paginationStore;
  const currentPage = paginationStore.currentPage;
  const pageSize = paginationStore.productsCount;
  const totalProducts = productsStore.totalProducts;

  const totalPages = Math.ceil(totalProducts / pageSize);

  const handlePageChange = (selectedPage: { selected: number }) => {
    paginationStore.setCurrentPage(selectedPage.selected + 1);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
      <ReactPaginate
        breakLabel={'...'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination__container}
        activeClassName={styles.active_page}
        pageClassName={styles.page_numbers__item}
        previousClassName={styles.arrow_icon}
        nextClassName={styles.arrow_icon}
        disabledClassName={styles.disabled}
        previousLabel={
          <ArrowLeftIcon
            className={styles.arrow_icon}
            width={32}
            height={32}
            color={isFirstPage ? 'secondary' : 'accent'}
          />
        }
        nextLabel={
          <ArrowRightIcon
            className={styles.arrow_icon}
            width={32}
            height={32}
            color={isLastPage ? 'secondary' : 'accent'}
          />
        }
      />
  );
});

export default Pagination;
