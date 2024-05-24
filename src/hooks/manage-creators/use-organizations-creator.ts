'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Organization } from '@/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { OrgTypes } from '@/types/organization-types';

export function useOrganizationsCreator(setIsLoading: Dispatch<SetStateAction<boolean>>) {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<OrgTypes>(OrgTypes.CLIENT);

    const onChangeName = (e: any) => {
        setName(e.target.value);
    };

    const onChangeType = (e: any) => {
        setType(e.target.value);
    };

    const onSubmit = () => {
        const { addOrganizationEnd } = Organization;

        setIsLoading(true);
        addOrganizationEnd({ name, type })
            .then(data => toastSuccess(data))
            .finally(() => setIsLoading(false));
    };

    return {
        name, onChangeName,
        type, onChangeType,
        onSubmit
    };
}