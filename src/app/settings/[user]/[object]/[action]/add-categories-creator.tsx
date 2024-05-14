'use client';

import { useState } from 'react';
import { Categories } from '@/app/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import styles from '@/styles/app/settings/[user]/[object]/[action]/page.module.scss';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';

export function AddCategoriesCreator() {
    const [categoryName, setCategoryName] = useState<string>('');

    const onCategoryNameChange = (e: any) => {
        setCategoryName(e.target.value);
    };

    const onSubmit = async () => {
        const { addCategoryEnd } = Categories;

        try {
            await addCategoryEnd(categoryName);
            setCategoryName('');

            toastSuccess(`New "${categoryName}" category has been added!`);
        } catch (err: any) {
            toastError(err.message);
        }
    };

    return (
        <form className={styles['creator-form']}>
            <InputString label={'Category name'} name={'category-name'} value={categoryName} onChange={onCategoryNameChange} />
            <div className={styles['navigation-box']}>
                <SubmitButton label={'Submit'} link={'/'} size="small" onSubmit={onSubmit} />
            </div>
        </form>
    );
}