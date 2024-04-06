import styles from '@/styles/app/page.module.scss';

export function WelcomeFragment() {
    return (
        <div className={styles['welcome-fragment']}>
            <div className={styles['welcome-fragment__text']}>
                <div className={styles['welcome-fragment__text-container']}>
                    <h1>The best benefits for you</h1>
                    <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
                    <button>Check now</button>
                </div>
            </div>
            <div className={styles['welcome-fragment__image']}></div>
        </div>
    );
}