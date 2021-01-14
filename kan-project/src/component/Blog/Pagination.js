import React from 'react';

const Pagination = ({ blogPerPage, totalBlogs, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='#' className='page-link' style={{ color: "gray" }}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;