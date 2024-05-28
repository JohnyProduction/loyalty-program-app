'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { useAddCreditsCreator } from '@/hooks/manage-creators/use-add-credits-creator';
import { useContext } from 'react';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { Loader } from '@/components/common/loader';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { OrganizationModel } from '@/types/organization-types';
import { UserDbModel } from '@/types/user-types';
import { AccountType } from '@/types/login-types';
import { InputNumber } from '@/components/common/inputs/input-number';

interface AddCreditsCreatorProps {
    profile?: UserDbModel;
}

export function AddCreditsCreator({ profile }: AddCreditsCreatorProps) {
    const { setIsLoading } = useContext(ManageCreatorContext);
    const { usernames, isLoading, organizations, organization, onChangeOrganization, login, onChangeLogin, amount, onChangeAmount, resetForm, currentAmount, isRefetching } = useAddCreditsCreator(profile);

    const getOrganizationsAsOptions = (organizations: OrganizationModel[]): OptionType[] => {
        return organizations.map(((organization, idx) => ({
            id: idx,
            label: organization.name,
            value: organization.name
        })));
    };

    const onSubmit = async () => {
        const { changeCreditsEnd } = User;
        setIsLoading(true);

        try {
            await changeCreditsEnd(login, amount);
            toastSuccess(`Pomyślnie ${amount > 0 ? 'dodano' : 'usunięto'} ${amount} kredytów dla użytkownika ${login}.`);
            resetForm();
        } catch (e: any) {
            toastError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    const renderCreditInfo = () => {
        if (amount) {
            const sum = currentAmount + amount;

            return `Currently has: ${sum} credits. (${amount > 0 ? `+${amount}` : amount})`;
        }

        return `Currently has: ${currentAmount} credits.`;
    };

    return (
        <>
            {isLoading ? <Loader /> : (
                <form className={styles['creator-form']} onSubmit={(e) => e.preventDefault()}>
                    {profile?.type === AccountType.ADMINISTRATOR && <InputSelect label={'Organization'} name={'organization'} options={getOrganizationsAsOptions(organizations)} value={organization || ''} onChange={onChangeOrganization} />}
                    {usernames.length === 0
                        ? 'There is no users in this organization.'
                        : (
                            <>
                                <InputSelect label={'Login'} name={'login'} options={usernames} value={login}
                                    onChange={onChangeLogin} />
                                <InputNumber label={'Amount'} name={'amount'} value={amount} onChange={onChangeAmount} />
                                {isRefetching ? <Loader /> : renderCreditInfo()}
                                <div className={styles['navigation-box']}>
                                    <SubmitButton label={'Add'} size="small" onSubmit={onSubmit} disabled={amount === 0} />
                                </div>
                            </>
                        )
                    }
                </form>
            )}
        </>
    );
}