'use client';

import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputNumber } from '@/components/common/inputs/input-number';
import { useCreateOfferCode } from '@/hooks/use-create-offer-code';
import { InputDate } from '@/components/common/inputs/input-date';
import { Loader } from '@/components/common/loader';
import { useContext } from 'react';
import { ProfileContext } from '@/contexts/profile-context';
import { AccountType } from '@/types/login-types';

interface OfferCodeFormProps {
    offerId: number;
}

export function OfferCodeForm({ offerId }: OfferCodeFormProps) {
    const {
        isLoading, onSubmit,
        codeNumber, onCodeNumberChange,
        expiry, onExpiryChange
    } = useCreateOfferCode(offerId);
    const profileProvider = useContext(ProfileContext);

    if (profileProvider.profile?.type !== AccountType.ADMINISTRATOR) {
        return <></>;
    }
    const handleExpiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newExpiry = event.target.value;

        try {
            const date = new Date(newExpiry);
            if (isNaN(date.getTime())) {
                throw new Error('Invalid date');
            }
            onExpiryChange(newExpiry);
        } catch (error) {
            console.error('Invalid date format', error);
        }
    };

    return (
        <div>
            {isLoading && <Loader isAbsolute={true} />}
            <InputNumber label={'Code number'} name={'code-number'} value={codeNumber} onChange={onCodeNumberChange} />
            <InputDate label={'Code expiration'} name={'code-expiry'} value={expiry} onChange={handleExpiryChange} />
            <SubmitButton label={'Add a new code'} onSubmit={onSubmit} size={'small'} />
        </div>
    );
}