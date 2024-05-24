'use client';

import styles from '@/styles/app/manage/[object]/page.module.scss';
import { User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputString } from '@/components/common/inputs/input-string';
import { useAddCreditsCreator } from '@/hooks/manage-creators/use-add-credits-creator';
import { useContext } from 'react';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { Loader } from '@/components/common/loader';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { OrganizationModel } from '@/types/organization-types';

export function AddCreditsCreator() {
    const { usernames, isLoading, organizations, organization, onChangeOrganization, login, onChangeLogin, amount, onChangeAmount } = useAddCreditsCreator();
    const { setIsLoading } = useContext(ManageCreatorContext);

    const getOrganizationsAsOptions = (organizations: OrganizationModel[]): OptionType[] => {
        return organizations.map(((organization, idx) => ({
            id: idx,
            label: organization.name,
            value: organization.name
        })));
    };

    const onSubmit = async () => {
        const { changeCreditsEnd } = User;

        try {
            setIsLoading(true);
            await changeCreditsEnd(login, Number(amount));
            toastSuccess(`Pomyślnie dodano ${amount} kredytów dla użytkownika ${login}.`);
        } catch (e: any) {
            toastError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading ? <Loader isAbsolute={true} /> : (
                <form className={styles['creator-form']}>
                    <InputSelect label={'Organization'} name={'organization'} options={getOrganizationsAsOptions(organizations)} value={organization || ''} onChange={onChangeOrganization} />
                    <InputSelect label={'Login'} name={'login'} options={usernames} value={login} onChange={onChangeLogin} />
                    <InputString label={'Amount'} name={'amount'} value={amount} onChange={onChangeAmount} />
                    <div className={styles['navigation-box']}>
                        <SubmitButton label={'Submit'} size="small" onSubmit={onSubmit} />
                    </div>
                </form>
            )}
        </>
    );
}