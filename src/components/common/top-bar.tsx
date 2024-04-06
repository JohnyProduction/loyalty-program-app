import styles from '@/styles/components/common/header.module.scss';

export function TopBar() {
    return (
        <header className={styles['header']}>
            <span></span>
            <div className={styles['header__search-container']}>
                <div className={styles['header__search']}>
                    <div>Search</div>
                </div>
                <div className={styles['header__search-menu-container']}>
                    <ul>
                        <li>Menu item 1</li>
                        <li>Menu item 1</li>
                        <li>Menu item 1</li>
                    </ul>
                </div>
            </div>
            <div className={styles['header__user-container']}>
                <p>1000 PKT</p>
                <div className={styles['header__user-profile']}>user profile</div>
            </div>
        </header>
    );
}