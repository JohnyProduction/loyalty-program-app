import { Dispatch, SetStateAction } from 'react';
import styles from '@/styles/app/page.module.scss';

interface ProductPaginationProps {
    setPage: Dispatch<SetStateAction<number>>;
    productCount: number;
    productsPerPage: number;
    page: number;
}

export function ProductPagination({ productCount, productsPerPage, page, setPage: setPage }: ProductPaginationProps) {
    const pages = Math.ceil(productCount / productsPerPage);
    const pageTags = new Array(pages).fill(null);
    const onChange = (e: any): void => {
        e.stopPropagation();

        const pageNumber = Number(e.target.value) + 1;

        setPage(pageNumber);
    };

    return (
        <>
            {pageTags.map((tag, idx) => {
                return <input
                    className={styles['product-pagination__paginator']}
                    key={`pagination-${idx}`}
                    type="radio"
                    name={'product-pagination'}
                    onChange={onChange}
                    value={idx}
                    checked={idx === page - 1}
                />;
            })}
        </>
    )
    ;
}