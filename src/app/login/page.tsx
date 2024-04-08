import { TopBar } from '@/components/common/top-bar';
import styles from '@/styles/app/login/page.module.scss';

export default function LoginPage() {
    return (
        <>
            <TopBar />
            <main className={styles['main-page']}>
                <div className={styles['login-page__container']}>
                    <div className={styles['login-page__leftbox']}>
                    </div>
                    <div className={styles['login-page__rightbox']}>
                        <form>
                            <h4>System <span>lojalnościowy</span></h4>
                            <p>Witaj ponownie! Zaloguj się aby poznać nowości w naszej ofercie:</p>
                            <div className={styles['login-page__floating-labels']}>
                                <input placeholder="Login" type="text" name="login" />
                                <label htmlFor="login">Login:</label>
                            </div>
                            <div className={styles['login-page__floating-labels']}>
                                <input placeholder="Password" type="password" name="password" />
                                <label htmlFor="password">Hasło:</label>
                            </div>
                            <button type="submit">Zaloguj</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
