import { OfferModel } from '@/types/offer-types';
import styles from '@/styles/app/categories/[name]/page.module.scss';
import Link from 'next/link';

interface OfferProps {
    offer: OfferModel;
}

export function Offer({ offer }: OfferProps) {
    return (
        <Link href={`/organizations/${offer.name}/offers`}>
            <div className={styles['offer-element']}>
                {offer.name}
            </div>
        </Link>
    );
}