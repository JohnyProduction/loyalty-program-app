'use client';

import { Categories } from '@/api/api';
import { useEffect, useState } from 'react';
import { CategoryModel } from '@/types/categories-types';

export function useCategoryImage(category: CategoryModel) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>('/pages/no-photo.png');

    useEffect(() => {
        if (!category.hasImage) {
            setIsLoading(false);

            return;
        }

        const { getCategoryImageEnd } = Categories;

        getCategoryImageEnd(category.name)
            .then(data => setUrl(URL.createObjectURL(data.blob)))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, url };
}