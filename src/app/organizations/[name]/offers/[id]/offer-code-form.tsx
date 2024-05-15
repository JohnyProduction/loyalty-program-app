'use client';

import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputNumber } from '@/components/common/inputs/input-number';
import { useCreateOfferCode } from '@/hooks/use-create-offer-code';
import { InputDate } from '@/components/common/inputs/input-date';

interface OfferCodeFormProps {
    offerId: number;
}

export function OfferCodeForm({ offerId }: OfferCodeFormProps) {
    const {
        isLoading, onSubmit,
        codeNumber, onCodeNumberChange,
        expiry, onExpiryChange
    } = useCreateOfferCode(offerId);

    return (
        <div>
            <InputNumber label={'Code number'} name={'code-number'} value={codeNumber} onChange={onCodeNumberChange} />
            <InputDate label={'Code expiration'} name={'code-expiry'} value={expiry} onChange={onExpiryChange} />
            <SubmitButton label={'Add a new code'} onSubmit={onSubmit} size={'small'} />
        </div>
    );
}