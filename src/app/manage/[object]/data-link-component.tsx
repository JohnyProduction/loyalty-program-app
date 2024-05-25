'use client';

import { Icon } from '@/components/common/icon';
import { Categories, Organization } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { useContext, useState } from 'react';
import { deleteUser } from '@/helpers/manage-user';
import { Loader } from '@/components/common/loader';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { useRouter, useSearchParams } from 'next/navigation';

interface DataLinkComponentProps {
    object: string;
    label: string;
}

export function DataLinkComponent({ object, label }: DataLinkComponentProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { reFetch, forceRefreshForm } = useContext(ManageCreatorContext);
    const router = useRouter();

    const onDelete = (e: any) => {
        const result = confirm('Are you sure to delete this object?');

        if (result) {
            setIsLoading(true);

            switch (object) {
            case 'users':
                deleteUser(label)
                    .then(() => { toastSuccess('User successfully deleted.'); reFetch(); })
                    .finally(() => {
                        setIsLoading(false);
                        router.push('/manage/users');
                        forceRefreshForm();
                    });
                break;
            case 'organizations':
                Organization
                    .deleteOrganizationEnd(label)
                    .then(() => { toastSuccess('Object successfully deleted!'); reFetch(); })
                    .catch((err) => toastError(`Error occurred: ${err.message}`))
                    .finally(() => {
                        setIsLoading(false);
                        router.push('/manage/organizations');
                        forceRefreshForm();
                    });
                break;
            case 'categories':
                Categories
                    .deleteCategoryEnd(label)
                    .then(() => { toastSuccess('Object successfully deleted!'); reFetch(); })
                    .catch((err) => toastError(`Error occurred: ${err.message}`))
                    .finally(() => {
                        setIsLoading(false);
                        router.push('/manage/categories');
                        forceRefreshForm();
                    });
                break;
            }
        }
    };

    return (
        <li>
            {isLoading && <Loader isAbsolute={true} />}
            {label}
            {['categories', 'users'].includes(object) && <Icon src={'/pages/edit.png'} size={32} href={`?object=${object}&edit=${label}`} />}
            <Icon src={'/pages/delete.png'} size={32} onClick={onDelete} />
        </li>
    );
}