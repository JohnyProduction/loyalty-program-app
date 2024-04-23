'use client';
import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/add-user/page.module.scss';
import { InputString } from '@/components/common/inputs/input-string';
import { InputSelect } from '@/components/common/inputs/input-select';
import { User } from '../api/api';
import { AccountTypes } from '@/types/login-types';
import { useAddUser } from '@/hooks/use-add-user';
export default function AddUserPage() {
    const { username, password, email, handleUsernameChange, handlePasswordChange, handleEmailChange } = useAddUser();
    const newUser={
        username: '',
        password: '',
        accountType: AccountTypes.ADMINISTRATOR,
        email: ''
    };
    /*
    interface OptionType {
        label: string;
        value: string;
      }
    const accountTypeOptions: OptionType[] = Object.keys(AccountTypes).map(key => ({
        label: key,
        value: AccountTypes[key as keyof typeof AccountTypes]
    }));
*/
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (username.trim() !== '' || password.trim() !== '' || email.trim() !== '') {
            newUser.username = username;
            newUser.password = password;
            newUser.email = email;
            User.addUserEnd(newUser);
            event.preventDefault();
        }

    };

    return (
        <>
            <TopBar />
            <main className={styles['main-page']}>
                <div className={styles['addUser-page__container']}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles['addUser-page__custom-inputs']}>
                            <h3>Panel dodawania użytkowników</h3>
                            <InputString label='Nazwa użytkownika' name='username' value={username} onChange={handleUsernameChange} />
                            <InputString label='Hasło użytkownika' name='password' value={password} onChange={handlePasswordChange} />
                            <InputString label='Email użytkownika' name='email' value={email} onChange={handleEmailChange} />
                            {/*<InputSelect label='Rola użytkownika' name='role' value={role} options={accountTypeOptions} onChange={handleRoleChange} /> */}
                            <button type="submit">Dodaj</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}
