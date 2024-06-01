'use client';

import { InputString } from '@/components/common/inputs/input-string';
import { useAddUsersCreator } from '@/hooks/manage-creators/use-add-users-creator';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { AccountType } from '@/types/login-types';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import styles from '@/styles/app/manage/[object]/page.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { Login, User } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { ManageCreatorContext } from '@/contexts/manage-creator-context';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserDbModel } from '@/types/user-types';

export function AddUsersCreator() {
    const router = useRouter();
    const formRef = useRef(null);
    const [user, setUser] = useState<UserDbModel>();
    const [currentUser, setCurrentUser] = useState<UserDbModel>();
    const { username, onChangeUsername, password, onChangePassword, email, onChangeEmail, organization, onChangeOrganization, organizationOptions, role, onChangeRole, loadUser, resetForm } = useAddUsersCreator(formRef, router, user);
    const roleOptions: OptionType[] = [
        { id: 1, label: AccountType.ADMINISTRATOR, value: AccountType.ADMINISTRATOR },
        { id: 2, label: AccountType.MANAGER, value: AccountType.MANAGER },
        { id: 3, label: AccountType.WORKER, value: AccountType.WORKER }
    ];
    const { setIsLoading, reFetch, needsToRefreshForm } = useContext(ManageCreatorContext);
    const queryParams = useSearchParams();
    const objectParam = queryParams.get('object');
    const editParam = queryParams.get('edit');
    const organizationParam = queryParams.get('organization');
    const disabled = Boolean(editParam);

    useEffect(() => {
        if (objectParam !== 'users') {
            return;
        }

        const { getUsersEnd, getCurrentUserEnd } = User;

        getCurrentUserEnd().then(current => {
            setCurrentUser(current);

            getUsersEnd(organizationParam ?? undefined)
                .then(users => {
                    const filteredUser = users.find(u => u.login === editParam);

                    if (!filteredUser) {
                        throw new Error(`There is no user with ${editParam} login.`);
                    }

                    if (current.type === AccountType.MANAGER && filteredUser.type === AccountType.ADMINISTRATOR) {
                        toastError('Manager cannot manage admin account!');
                        router.push('/manage/users');
                        resetForm();

                        return;
                    }

                    setUser(filteredUser);
                    loadUser(filteredUser);
                })
                .catch(err => toastError(`Error: ${err.message}`));
        });
    }, [editParam]);

    useEffect(() => {
        resetForm();
    }, [needsToRefreshForm]);

    const onSubmit = () => {
        if (editParam) {
            const { editUserMailEnd } = User;
            // @ts-ignore
            const newUser: UserDbModel = { ...user, email };

            setIsLoading(true);
            editUserMailEnd(newUser)
                .then(data => {
                    toastSuccess(data);
                    resetForm();
                    router.push('/manage/users');
                })
                .catch(err => toastError(`Error: ${err.message}.`))
                .finally(() => setIsLoading(false));
        } else {
            const { registerForAdminEnd } = Login;
            const { addUserEnd } = User;

            setIsLoading(true);
            const createNewFunc = currentUser?.type === AccountType.ADMINISTRATOR ? registerForAdminEnd : addUserEnd;
            const props = {
                username,
                password,
                email,
                accountType: role,
                organizationName: organization
            };

            if (currentUser?.type === AccountType.ADMINISTRATOR) {
                // @ts-ignore
                delete props.organizationName;
            }

            createNewFunc(props)
                .then(data => {
                    toastSuccess(data);
                    resetForm();
                    reFetch();
                })
                .catch(err => toastError(err.message))
                .finally(() => setIsLoading(false));
        }
    };

    const isValidUsername = username.length > 3;
    const isValidPassword = password.length > 7;
    const emailRegexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = emailRegexp.test(email);

    const isDisabledSubmit = !isValidUsername || !isValidPassword || !isValidEmail;

    return (
        <form className={styles['creator-form']}  onSubmit={(e) => e.preventDefault()} ref={formRef}>
            <InputString label={'Username'} name={'username'} value={username} onChange={onChangeUsername} disabled={disabled} isValid={isValidUsername} />
            {!editParam && <InputString label={'Password'} name={'password'} value={password} onChange={onChangePassword} disabled={disabled} isPassword={true} isValid={isValidPassword} />}
            <InputString label={'Email'} name={'email'} value={email} onChange={onChangeEmail} isValid={isValidEmail} />
            {currentUser?.type === AccountType.ADMINISTRATOR && <InputSelect label={'Organization'} name={'organization'} value={organization} onChange={onChangeOrganization} options={organizationOptions} disabled={disabled} />}
            <InputSelect label={'Role'} name={'role'} value={role} onChange={onChangeRole} options={currentUser?.type === AccountType.ADMINISTRATOR ? roleOptions : roleOptions.slice(1)} disabled={disabled} />
            <div className={styles['navigation-box']}>
                {!editParam && <div></div>}
                <SubmitButton label={editParam ? 'Edit' : 'Create new'} size="small" onSubmit={onSubmit} disabled={isDisabledSubmit} />
                {editParam && <SubmitButton label={'Back to creation'} size="small" onSubmit={resetForm} />}
            </div>
        </form>
    );
}