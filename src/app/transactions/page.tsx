import styles from '@/styles/app/transactions/page.module.scss';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { TopBar } from '@/components/common/top-bar';
import { TransactionContainer } from '@/app/transactions/transaction-container';

export default function TransactionsPage() {
    return (
        <main className={styles['transactions-page']}>
            <TopBar />
            <PageBox>
                <TransactionContainer />
                <Footer />
            </PageBox>
        </main>
    );
}