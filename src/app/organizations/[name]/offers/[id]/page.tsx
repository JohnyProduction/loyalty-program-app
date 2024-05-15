import styles from '@/styles/app/organizations/[name]/offers/[id]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { OfferCodeContainer } from '@/app/organizations/[name]/offers/[id]/offer-id-container';

interface OfferIdPageProps {
    params: Record<string, any>;
}

export default function OfferIdPage({ params }: OfferIdPageProps) {
    const { id } = params;

    return (
        <main className={styles['offer-id-page']}>
            <TopBar />
            <PageBox>
                {/*<OfferCodeForm offerId={id} />*/}
                <OfferCodeContainer offerId={Number(id)} />
                <Footer />
            </PageBox>
        </main>
    );
}