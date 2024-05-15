import styles from '@/styles/app/manage/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import Link from 'next/link';

export default function ManagePage() {
    return (
        <main className={styles['manage-page']}>
            <TopBar />
            <PageBox>
                <div className={styles['creator-container']}>
                    <div className={styles['manage-container']}>
                        <ul>
                            <Link href={'/settings/Administrator/organizations/add'}>
                                <li>Add a new shop</li>
                            </Link>
                            <Link href={'/settings/Administrator/categories/add'}>
                                <li>Add a new category</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <Footer />
            </PageBox>
        </main>
    );
}