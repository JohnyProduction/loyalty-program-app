'use client';

import { useEffect, useState } from 'react';
import { Categories } from '@/app/api/api';
import { CategoryModel } from '@/types/categories-types';
import { toastError } from '@/utils/toast-utils';

export function useCategories() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<CategoryModel[]>([]);

    useEffect(() => {
        const { getCategoriesEnd } = Categories;

        getCategoriesEnd()
            .then(data => setCategories(data))
            .catch(err => toastError(`Error occurred during fetching categories: ${err.message}`))
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, categories };
}