import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

function Pagination({ onChangePage }) {
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => onChangePage(e.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={styles.wrapper}
            />
        </>
    )
}

export default Pagination