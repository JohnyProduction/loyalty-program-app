'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Categories } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';

export function useCategoriesCreator(setIsLoading: Dispatch<SetStateAction<boolean>>, reFetch: () => void, formRef: any, editParam: string | null, router: any) {
    const [categoryName, setCategoryName] = useState<string>('');
    const [image, setImage] = useState<File | null>( null);

    const loadForm = (categoryName: string, image?: File) => {
        setCategoryName(categoryName);

        if (image) {
            onImageChange({
                target: {
                    files: [ image ]
                }
            });
        }
    };

    const resetForm = () => {
        if (formRef) {
            formRef.current.reset();
        }

        setCategoryName('');
        setImage(null);
    };

    const onCategoryNameChange = (e: any) => setCategoryName(e.target.value);

    const onImageChange = (e: any) => setImage(e.target.files[0]);

    const onDeleteImage = async () => {
        if (!editParam) {
            return;
        }

        const { deleteCategoryImageEnd } = Categories;
        setIsLoading(true);

        try {
            const res = await deleteCategoryImageEnd(editParam);

            setImage(null);
            toastSuccess(res);
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmit = async () => {
        const { addCategoryEnd, setCategoryImageEnd } = Categories;
        setIsLoading(true);

        try {
            if (!editParam) {
                await addCategoryEnd(categoryName);
                setCategoryName('');
            }

            if (image) {
                const formData = new FormData();
                formData.set('file', image);

                await setCategoryImageEnd(categoryName, formData);

                if (editParam) {
                    router.push('/manage/categories');
                }
            }

            const message = editParam ? 'Category has been edited!' : `New "${categoryName}" category has been added!`;

            toastSuccess(message);
            resetForm();
            reFetch();
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        categoryName, onCategoryNameChange,
        image, onImageChange,
        onDeleteImage, onSubmit, loadForm, resetForm
    };
}