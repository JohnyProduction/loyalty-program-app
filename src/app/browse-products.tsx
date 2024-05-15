'use client';

import styles from '@/styles/app/page.module.scss';
import { useCategories } from '@/hooks/use-categories';
import { CategoryCart } from '@/app/category-cart';
import { Loader } from '@/components/common/loader';

export function BrowseProducts() {
    const { isLoading, categories } = useCategories();

    return (
        <div className={styles['browse-products']}>
            <h2 className={styles['browse-products__header']}>Browse products</h2>
            <div>
                {isLoading
                    ? <Loader />
                    : (
                        <div className={styles['browse-products__container']}>
                            {categories.map(category => <CategoryCart category={category} key={category.name} />)}
                        </div>
                    )
                }
            </div>
        </div>
    );
}