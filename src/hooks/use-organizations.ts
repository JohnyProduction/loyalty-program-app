'use client';

import { useEffect, useState } from 'react';
import { OrganizationModel } from '@/types/organization-types';
import { Organization } from '@/api/api';

export function useOrganizations() {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [organizations, setOrganizations] = useState<OrganizationModel[]>([]);

    useEffect(() => {
        Organization
            .getOrganizationsEnd()
            .then(data => setOrganizations(data))
            .catch(() => {})
            .finally(() => setIsFetching(false));
    }, []);

    return { isFetching, organizations };
}