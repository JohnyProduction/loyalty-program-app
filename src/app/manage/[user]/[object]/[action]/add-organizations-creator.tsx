'use client';

import styles from '@/styles/app/manage/[user]/[object]/[action]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { Organization } from '@/api/api';
import { toastSuccess } from '@/utils/toast-utils';
import { OrgTypes } from '@/types/organization-types';
import { useAddOrganizationsCreator } from '@/hooks/settings-creators/use-add-organizations-creator';
import { useContext } from 'react';
import { SettingsCreatorContext } from '@/contexts/settings-creator-context';

export function AddOrganizationsCreator() {
    const { name, onChangeName, type, onChangeType } = useAddOrganizationsCreator();
    const { setIsLoading } = useContext(SettingsCreatorContext);
    const typeOptions: OptionType[] = [
        { id: 1, label: OrgTypes.CLIENT, value: OrgTypes.CLIENT },
        { id: 2, label: OrgTypes.SHOP, value: OrgTypes.SHOP },
        { id: 3, label: OrgTypes.SWAGGER, value: OrgTypes.SWAGGER }
    ];

    const onSubmit = () => {
        const { addOrganizationEnd } = Organization;

        setIsLoading(true);
        addOrganizationEnd({ name, type })
            .then(data => toastSuccess(data))
            .finally(() => setIsLoading(false));
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Name'} name={'name'} value={name} onChange={onChangeName} />
            <InputSelect label={'Type'} name={'type'} value={type} onChange={onChangeType} options={typeOptions} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}