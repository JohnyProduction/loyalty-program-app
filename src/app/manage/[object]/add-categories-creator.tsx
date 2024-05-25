'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { Categories } from '@/api/api';
import { toastError } from '@/utils/toast-utils';
import styles from '@/styles/app/manage/[object]/page.module.scss';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { InputImage } from '@/components/common/inputs/input-image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCategoriesCreator } from '@/hooks/manage-creators/use-categories-creator';
import { Loader } from '@/components/common/loader';

export function AddCategoriesCreator() {
    const [isLoadingObject, setIsLoadingObject] = useState<boolean>(false);
    const queryParams = useSearchParams();
    const objectParam = queryParams.get('object');
    const editParam = queryParams.get('edit');
    const disabled = Boolean(editParam);
    const router = useRouter();

    const formRef = useRef(null);
    const { setIsLoading, reFetch, needsToRefreshForm } = useContext(ManageCreatorContext);

    const { categoryName, onCategoryNameChange, image, onImageChange, onSubmit, loadForm, resetForm } = useCategoriesCreator(setIsLoading, reFetch, formRef, editParam, router);

    useEffect(() => {
        if (objectParam === 'categories' && editParam) {
            setIsLoadingObject(true);
            let file: File | null;

            Categories
                .getCategoryImageEnd(editParam)
                .then(img => {
                    file = new File([img.blob], `${editParam}-category-image`, { type: img.blob.type });
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
            <InputString label={'Category name'} name={'category-name'} value={categoryName} onChange={onCategoryNameChange} disabled={disabled} />
            <InputImage label={'Category image'} name={'category-image'} image={image} onChange={onImageChange} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}