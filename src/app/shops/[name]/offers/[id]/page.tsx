import styles from '@/styles/app/shops/[name]/offers/[id]/page.module.scss';
import { TopBar } from '@/components/common/top-bar';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { OfferCodeContainer } from '@/app/shops/[name]/offers/[id]/offer-id-container';
import { OfferCodeForm } from '@/app/shops/[name]/offers/[id]/offer-code-form';
import { ProfileProvider } from '@/contexts/profile-context';

interface OfferIdPageProps {
    params: Record<string, any>;
}

export default function OfferIdPage({ params }: OfferIdPageProps) {
    const { id } = params;

    return (
        <main className={styles['offer-id-page']}>
            <ProfileProvider>
                <TopBar />
                <PageBox>
                    <OfferCodeForm offerId={id} />
                    <OfferCodeContainer offerId={Number(id)} />
                    <Footer />
                </PageBox>
            </ProfileProvider>
        </main>
    );
}