'use client';

import styles from '@/styles/app/organizations/[name]/offers/page.module.scss';
import { PageBox } from '@/app/page-box';
import { Footer } from '@/components/common/footer';
import { TopBar } from '@/components/common/top-bar';
import { OfferContainer } from '@/app/organizations/[name]/offers/offer-container';
import { OfferForm } from '@/app/organizations/[name]/offers/offer-form';
import { ProfileProvider } from '@/contexts/profile-context';

interface OrganizationOffersPageProps {
    params: Record<string, any>;
}

export default function OrganizationOffersPage({ params }: OrganizationOffersPageProps) {
    const { name } = params;

    return (
        <main className={styles['organization-offers-page']}>
            <ProfileProvider>
                <TopBar />
                <PageBox>
                    <OfferForm organizationName={name} />
                    <OfferContainer organizationName={name} />
                    <Footer />
                </PageBox>
            </ProfileProvider>
        </main>
    );
}