'use client';

import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { Organization } from '@/app/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { OrgTypes } from '@/types/organization-types';
import { useAddOrganizationsCreator } from '@/hooks/settings-creators/use-add-organizations-creator';

export function AddOrganizationsCreator() {
    const { name, onChangeName, type, onChangeType } = useAddOrganizationsCreator();
    const typeOptions: OptionType[] = [
        { id: 1, label: OrgTypes.CLIENT, value: OrgTypes.CLIENT },
        { id: 2, label: OrgTypes.SHOP, value: OrgTypes.SHOP },
        { id: 3, label: OrgTypes.SWAGGER, value: OrgTypes.SWAGGER }
    ];

    const onSubmit = () => {
        const { addOrganizationEnd } = Organization;

        addOrganizationEnd({ name, type }).then(data => toastSuccess(data));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Name'} name={'name'} value={name} onChange={onChangeName} />
            <InputSelect label={'Type'} name={'type'} value={type} onChange={onChangeType} options={typeOptions} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}