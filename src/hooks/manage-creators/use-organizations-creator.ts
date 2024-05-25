'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Organization } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { OrgTypes } from '@/types/organization-types';

export function useOrganizationsCreator(setIsLoading: Dispatch<SetStateAction<boolean>>, reFetch: () => void, formRef: any, editParam: string | null, router: any) {
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<OrgTypes>(OrgTypes.CLIENT);
    const [image, setImage] = useState<File | null>( null);

    const loadForm = (name: string, image?: File) => {
        Organization
            .getOrganizationsEnd()
            .then(org => {
                const organization = org.find(o => o.name === name);

                if (organization) {
                    setName(name);
                    setType(organization.type);

                    if (image) {
                        onChangeImage({
                            target: {
                                files: [ image ]
                            }
                        });
                    }
                }
            });
    };

    const resetForm = () => {
        if (formRef) {
            formRef.current.reset();
        }

        setName('');
        setType(OrgTypes.CLIENT);
        setImage(null);
    };

    const onChangeName = (e: any) => setName(e.target.value);

    const onChangeType = (e: any) => setType(e.target.value);

    const onChangeImage = (e: any) => setImage(e.target.files[0]);

    const onSubmit = async () => {
        const { addOrganizationEnd, setOrganizationImageEnd } = Organization;

        setIsLoading(true);

        try {
            if (!editParam) {
                await addOrganizationEnd({ name, type });
            }

            if (image) {
                const formData = new FormData();
                formData.set('file', image);

                await setOrganizationImageEnd(name, formData);
            }

            const message = editParam ? 'Successfully edited organization.' : 'Successfully added a new organization.';

            toastSuccess(message);
            resetForm();
            reFetch();
            router.push('/manage/organizations');
        } catch (err: any) {
            toastError(`Error: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        name, onChangeName,
        type, onChangeType,
        image, onChangeImage,
        onSubmit, loadForm, resetForm
    };
}