'use client';

import { useContext, useEffect, useState } from 'react';
import { Categories, Organization, User } from '@/api/api';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';

export function useFetchCollection(object: string) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<string[]>([]);
    const context = useContext(ManageCreatorContext);

    useEffect(() => {
        if (object === 'users') {
            User.getUsersEnd()
                .then(data => {
                    const userMap = data.map(user => user.login);
                    setData(userMap);
                })
                .catch(() => {})
                .finally(() => setIsLoading(false));
        }
        else if (object === 'organizations') {
            Organization.getOrganizationsEnd()
                .then(data => {
                    const organizationMap = data.map(organization => organization.name);
                    setData(organizationMap);
                })
                .catch(() => {})
                .finally(() => setIsLoading(false));
        }
        else if (object === 'categories') {
            Categories.getCategoriesEnd()
                .then(data => {
                    const categoriesMap = data.map(categories => categories.name);
                    setData(categoriesMap);
                })
                .catch(() => {})
                .finally(() => setIsLoading(false));
        }
        else setIsLoading(false);
    }, [context.isReFetched]);

    return { data, isLoading };
}