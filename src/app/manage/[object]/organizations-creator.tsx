'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useOrganizationsCreator } from '@/hooks/manage-creators/use-organizations-creator';
import { useContext } from 'react';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { OrgTypes } from '@/types/organization-types';

export function OrganizationsCreator() {
    const { setIsLoading } = useContext(ManageCreatorContext);
    const { name, onChangeName, type, onChangeType, onSubmit } = useOrganizationsCreator(setIsLoading);
    const typeOptions: OptionType[] = [
        { id: 1, label: OrgTypes.CLIENT, value: OrgTypes.CLIENT },
        { id: 2, label: OrgTypes.SHOP, value: OrgTypes.SHOP },
        { id: 3, label: OrgTypes.SWAGGER, value: OrgTypes.SWAGGER }
    ];

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