'use client';

import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useCreateOffer } from '@/hooks/use-create-offer';
import { InputString } from '@/components/common/inputs/input-string';
import { InputNumber } from '@/components/common/inputs/input-number';
import { InputImage } from '@/components/common/inputs/input-image';

interface OfferFormProps {
    organizationName: string;
}

export function OfferForm({ organizationName }: OfferFormProps) {
    const {
        name, onNameChange,
        price, onPriceChange,
        image, onImageChange,
        onSubmit
    } = useCreateOffer(organizationName);

    return (
        <div>
            <InputString label={'Offer name'} name={'offer-name'} value={name} onChange={onNameChange} />
            <InputNumber label={'Offer price'} name={'offer-price'} value={price} onChange={onPriceChange} />
            <InputImage label={'Offer image (optional)'} name={'offer-image'} image={image} onChange={onImageChange} />
            <SubmitButton label={'Add a new offer'} onSubmit={onSubmit} size={'small'} />
        </div>
    );
}