'use client';

import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useCreateOffer } from '@/hooks/use-create-offer';
import { InputString } from '@/components/common/inputs/input-string';
import { InputNumber } from '@/components/common/inputs/input-number';
import { InputImage } from '@/components/common/inputs/input-image';
import { Loader } from '@/components/common/loader';
import { useContext } from 'react';
import { ProfileContext } from '@/contexts/profile-context';
import { AccountType } from '@/types/login-types';

interface OfferFormProps {
    organizationName: string;
}

export function OfferForm({ organizationName }: OfferFormProps) {
    const {
        name, onNameChange,
        price, onPriceChange,
        image, onImageChange,
        onSubmit, isLoading
    } = useCreateOffer(organizationName);
    const { profile } = useContext(ProfileContext);

    if (!profile || profile.type !== AccountType.ADMINISTRATOR) {
        return <></>;
    }

    const isValidOfferName = name.length > 3;
    const isValidOfferPrice = price > 0;

    const isDisabledSubmit = !isValidOfferName || !isValidOfferPrice;

    return (
        <div>
            {isLoading && <Loader isAbsolute={true} />}
            <InputString label={'Offer name'} name={'offer-name'} value={name} onChange={onNameChange} isValid={isValidOfferName} isRequired={true} />
            <InputNumber label={'Offer price'} name={'offer-price'} value={price} onChange={onPriceChange} isValid={isValidOfferPrice} isRequired={true} />
            <InputImage label={'Offer image (optional)'} name={'offer-image'} image={image} onChange={onImageChange} />
            <SubmitButton label={'Add a new offer'} onSubmit={onSubmit} size={'small'} disabled={isDisabledSubmit} />
        </div>
    );
}