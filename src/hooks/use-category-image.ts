'use client';

import { Categories } from '@/app/api/api';
import { useEffect, useState } from 'react';

export function useCategoryImage(categoryName: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>('');

    useEffect(() => {
        const { getCategoryImageEnd } = Categories;

        getCategoryImageEnd(categoryName)
            .then(data => setUrl(URL.createObjectURL(data.blob)))
            .catch(() => {})
            .finally(() => setIsLoading(false));
    }, []);

    return { isLoading, url };
}