import { Icon } from '@/components/common/icon';
import { Categories, Organization, User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';

interface DataLinkComponentProps {
    object: string;
    label: string;
}

export function DataLinkComponent({ object, label }: DataLinkComponentProps) {
    const onDelete = (e: any) => {
        const result = confirm('Are you sure to delete this object?');

        if (result) {
            switch (object) {
            case 'users':
                // User.deleteUserEnd();
                break;
            case 'organizations':
                Organization
                    .deleteOrganizationEnd(label)
                    .then(() => toastSuccess('Object successfully deleted!'))
                    .catch((err) => toastError(`Error occurred: ${err.message}`));
                break;
            case 'categories':
                Categories
                    .deleteCategoryEnd(label)
                    .then(() => toastSuccess('Object successfully deleted!'))
                    .catch((err) => toastError(`Error occurred: ${err.message}`));
                break;
            }
        }
    };

    return (
        <li>
            {label}
            {['users'].includes(object) && <Icon src={'/pages/edit.png'} size={32} />}
            <Icon src={'/pages/delete.png'} size={32} onClick={onDelete} />
        </li>
    );
}