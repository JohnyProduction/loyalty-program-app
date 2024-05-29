'use client';

import { useParams } from 'next/navigation';
import { InputImage } from '@/components/common/inputs/input-image';
import { useContext, useState } from 'react';
import { ProfileContext } from '@/contexts/profile-context';
import { AccountType } from '@/types/login-types';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { Offers } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { FormRefetchContext } from '@/contexts/form-refetch-context';
import { Loader } from '@/components/common/loader';

export function OfferImageForm() {
    const { id } = useParams();
    const { profile } = useContext(ProfileContext);
    const { refetch } = useContext(FormRefetchContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>( null);
    const onChangeImage = (e: any) => setImage(e.target.files[0]);

    const onSubmit = async () => {
        if (!image) {
            return;
        }

        const { setOfferImageEnd } = Offers;
        setIsLoading(true);

        const data = new FormData();
        data.append('file', image);

        try {
            const res = await setOfferImageEnd(Number(id), data);

            toastSuccess(res);
            refetch();
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return profile?.type === AccountType.ADMINISTRATOR && (
        <>
            {isLoading && <Loader isAbsolute={true} />}
            <InputImage label={'Select new image'} name={'image'} image={image} onChange={onChangeImage} />
            <SubmitButton label={'Save new image'} onSubmit={onSubmit} size={'small'} disabled={!image} />
        </>
    );
}