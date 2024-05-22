'use client';

import { useState } from 'react';
import { OrgTypes } from '@/types/organization-types';

export function useAddOrganizationsCreator() {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<OrgTypes>(OrgTypes.CLIENT);

    const onChangeName = (e: any) => {
        setName(e.target.value);
    };

    const onChangeType = (e: any) => {
        setType(e.target.value);
    };

    return {
        name, onChangeName,
        type, onChangeType
    };
}