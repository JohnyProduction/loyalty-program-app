'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useOrganizationsCreator } from '@/hooks/manage-creators/use-organizations-creator';
import { useContext, useEffect, useRef, useState } from 'react';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { OrgTypes } from '@/types/organization-types';
import { InputImage } from '@/components/common/inputs/input-image';
import { Organization } from '@/api/api';
import { toastError } from '@/utils/toast-utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader } from '@/components/common/loader';

export function OrganizationsCreator() {
    const [isLoadingObject, setIsLoadingObject] = useState<boolean>(false);
    const queryParams = useSearchParams();
    const objectParam = queryParams.get('object');
    const editParam = queryParams.get('edit');
    const disabled = Boolean(editParam);

    const router = useRouter();
    const formRef = useRef(null);
    const { setIsLoading, reFetch, needsToRefreshForm } = useContext(ManageCreatorContext);
    const { name, onChangeName, type, onChangeType, onSubmit, image, onChangeImage, resetForm, loadForm } = useOrganizationsCreator(setIsLoading, reFetch, formRef, editParam, router);
    const typeOptions: OptionType[] = [
        { id: 1, label: OrgTypes.CLIENT, value: OrgTypes.CLIENT },
        { id: 2, label: OrgTypes.SHOP, value: OrgTypes.SHOP },
        { id: 3, label: OrgTypes.SWAGGER, value: OrgTypes.SWAGGER }
    ];

    useEffect(() => {
        if (objectParam === 'organizations' && editParam) {
            setIsLoadingObject(true);
            let file: File | null;

            Organization
                .getOrganizationImageEnd(editParam)
                .then(img => {
                    file = new File([img.blob], `${editParam}-organization-image`, { type: img.blob.type });
                })
                .catch(err => {
                    if (err.message !== 'Image does not exist!') toastError(`Error: ${err.message}`);
                })
                .then(() => {
                    resetForm();

                    if (file) {
                        loadForm(editParam, file);
                    } else {
                        loadForm(editParam);
                    }
                })
                .finally(() => setIsLoadingObject(false));
        }
    }, [editParam]);

    useEffect(() => {
        resetForm();
    }, [needsToRefreshForm]);

    return (
        <form className={styles['creator-form']} ref={formRef}>
            {isLoadingObject && <Loader isAbsolute={true} />}
            <InputString label={'Name'} name={'name'} value={name} onChange={onChangeName} disabled={disabled} />
            <InputSelect label={'Type'} name={'type'} value={type} onChange={onChangeType} options={typeOptions} disabled={disabled} />
            <InputImage label={'Image'} name={'image'} image={image} onChange={onChangeImage} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}