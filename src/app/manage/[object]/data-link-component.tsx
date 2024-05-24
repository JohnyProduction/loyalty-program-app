'use client';

import { Icon } from '@/components/common/icon';
import { Categories, Organization, User } from '@/api/api';
import { toastError, toastInfo, toastSuccess } from '@/utils/toast-utils';
import { useContext, useState } from 'react';
import { deleteUser } from '@/helpers/manage-user';
import { Loader } from '@/components/common/loader';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';

interface DataLinkComponentProps {
    object: string;
    label: string;
}

export function DataLinkComponent({ object, label }: DataLinkComponentProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { reFetch } = useContext(ManageCreatorContext);

    const onDelete = (e: any) => {
        const result = confirm('Are you sure to delete this object?');

        if (result) {
            setIsLoading(true);

            switch (object) {
            case 'users':
                deleteUser(label)
                    .then(() => { toastSuccess('User successfully deleted.'); reFetch(); })
                    .finally(() => setIsLoading(false));
                break;
            case 'organizations':
                Organization
                    .deleteOrganizationEnd(label)
                    .then(() => { toastSuccess('Object successfully deleted!'); reFetch(); })
                    .catch((err) => toastError(`Error occurred: ${err.message}`))
                    .finally(() => setIsLoading(false));
                break;
            case 'categories':
                Categories
                    .deleteCategoryEnd(label)
                    .then(() => { toastSuccess('Object successfully deleted!'); reFetch(); })
                    .catch((err) => toastError(`Error occurred: ${err.message}`))
                    .finally(() => setIsLoading(false));
                break;
            }
        }
    };

    return (
        <li>
            {isLoading && <Loader isAbsolute={true} />}
            {label}
            {['users'].includes(object) && <Icon src={'/pages/edit.png'} size={32} href={`?object=${object}&edit=${label}`} />}
            <Icon src={'/pages/delete.png'} size={32} onClick={onDelete} />
        </li>
    );
}