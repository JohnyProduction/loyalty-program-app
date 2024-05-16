import styles from '@/styles/app/transactions/[id]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';

interface TransactionsIdPageProps {
    params: Record<any, any>;
}

export default function TransactionsIdPage({ params }: TransactionsIdPageProps) {
    const { id } = params;

    // TODO Use below hook to fetch a transaction provided with id in params
    // const { transaction, isLoading } = useTransaction(Number(id));

    return (
        <main className={styles['transactions-id-page']}>
            <TopBar />
            <PageBox>
                <Footer />
            </PageBox>
        </main>
    );
}