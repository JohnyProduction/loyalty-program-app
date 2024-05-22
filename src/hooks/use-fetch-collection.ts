'use client';

import { useEffect, useState } from 'react';
import { User } from '@/api/api';

export function useFetchCollection(object: string, action: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<string[]>([]);

    useEffect(() => {
        if (object === 'users' && action === 'add') {
            User.getUsersEnd()
                .then(data => {
                    const userMap = data.map(user => user.login);
                    setData(userMap);
                })
                .catch(() => {})
                .finally(() => setIsLoading(false));
        }
    }, []);

    return { data, isLoading };
}