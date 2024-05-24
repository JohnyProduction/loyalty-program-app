'use client';

import { useContext, useState } from 'react';
import { Categories } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import styles from '@/styles/app/manage/[object]/page.module.scss';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';

export function AddCategoriesCreator() {
    const [categoryName, setCategoryName] = useState<string>('');
    const { setIsLoading } = useContext(ManageCreatorContext);

    const onCategoryNameChange = (e: any) => {
        setCategoryName(e.target.value);
    };

    const onSubmit = async () => {
        const { addCategoryEnd } = Categories;
        setIsLoading(true);

        try {
            await addCategoryEnd(categoryName);
            setCategoryName('');

            toastSuccess(`New "${categoryName}" category has been added!`);
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Category name'} name={'category-name'} value={categoryName} onChange={onCategoryNameChange} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}