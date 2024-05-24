'use client';

import { useEffect, useState } from 'react';
import { OrganizationModel } from '@/types/organization-types';
import { Organization } from '@/api/api';
import { toastError } from '@/utils/toast-utils';

export function useOrganizations() {
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const [organizations, setOrganizations] = useState<OrganizationModel[]>([]);

    useEffect(() => {
        Organization
            .getOrganizationsEnd()
            .then(data => setOrganizations(data))
            .catch(err => toastError(`Error: ${err.message}.`))
            .finally(() => setIsFetching(false));
    }, []);

    return { isFetching, organizations };
}