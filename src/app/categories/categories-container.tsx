'use client';

import { useCategories } from '@/hooks/use-categories';
import styles from '@/styles/app/categories/page.module.scss';
import { Loader } from '@/components/common/loader';
import { CategoryCart } from '@/app/category-cart';

export function CategoriesContainer() {
    const { isLoading, categories } = useCategories();

    return (
        <div className={styles['categories-container']}>
            {isLoading
                ? <Loader isAbsolute={true} />
                : categories.map(category => <CategoryCart category={category} key={category.name} />)
            }
        </div>
    );
}