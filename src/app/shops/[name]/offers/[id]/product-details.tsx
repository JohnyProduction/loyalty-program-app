'use client';

import styles from '@/styles/app/shops/[name]/offers/[id]/product.module.scss';
import { InputCounter } from '@/components/common/inputs/input-counter';
import { RectangularButton } from '@/components/common/buttons/rectangular-button';
import Link from 'next/link';
import { useCounter } from '@/hooks/use-counter';
import { useGetOffer } from '@/hooks/use-get-offer';
import { useParams } from 'next/navigation';
import { OfferImage } from '@/app/shops/[name]/offers/[id]/offer-image';
import { useContext, useState } from 'react';
import { ProfileContext } from '@/contexts/profile-context';
import { Offers, Transactions } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { Loader } from '@/components/common/loader';
import { FormRefetchContext } from '@/contexts/form-refetch-context';

interface ProductDetailsProps {
    productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
    const { name: organization, id: offerId } = useParams();
    const counterProps = useCounter(0);
    const { profile } = useContext(ProfileContext);
    const { refetch } = useContext(FormRefetchContext);
    const { offer, isLoading, image, isLoadingImage } = useGetOffer(organization.toString(), Number(offerId));
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const renderTotalPrice = (price?: number) => {
        return `${(price ?? 0) * counterProps.count} PKT`;
    };

    const onBuy = async () => {
        setIsSubmitting(true);

        try {
            const { checkOfferCodesEnd } = Offers;
            const id = Number(offerId);

            const codes = await checkOfferCodesEnd(id);
            const availableCodes = codes.filter(code => !code.isUsed);

            if (counterProps.count > availableCodes.length) {
                toastError('Insufficient number of available codes for this offer.');

                return;
            }

            const totalCost = (offer?.price ?? 0) * counterProps.count;

            if ((profile?.credits ?? 0) < totalCost) {
                toastError('Insufficient amount of credits.');

                return;
            }

            const { buyCode } = Transactions;
            const codesToBuy = availableCodes.slice(0, counterProps.count).map(() => buyCode(id));

            const x = await Promise.allSettled(codesToBuy);

            console.log(x);

            // for (let i = 0; i < counterProps.count; i++) {
            //     await buyCode(id);
            // }

            toastSuccess(`You have successfully bought ${counterProps.count} codes.`);
            refetch();
        } catch (err: any) {
            toastError(`Error: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles['product-details']}>
            {isSubmitting && <Loader isAbsolute={true} />}
            {isLoading
                ? <></>
                : (
                    <>
                        <OfferImage image={image} isLoadingImage={isLoadingImage} />
                        <div className={styles['details-container']}>
                            <div className={styles['details-information']}>
                                <div className={styles['details-information__container']}>
                                    <div>
                                        <p className={styles['details-information__brand']}>Brand: {organization}</p>
                                        <p className={styles['details-information__product-id']}>ID produktu: {productId}</p>
                                        <p className={styles['details-information__product-name']}>{offer?.name}</p>
                                    </div>
                                </div>
                                <div className={styles['details-information__container']}>
                                    <div>
                                        <div className={styles['details-information__information-box']}>
                                            <img src="/pages/products/web.png" alt="Web" />
                                            <p><Link href={`/shops/${organization}/offers`}>More offers</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className={styles['details-transaction']}>
                                <p className={styles['product-cost']}>{renderTotalPrice(offer?.price)}</p>
                                <div className={styles['transaction-box']}>
                                    <InputCounter {...counterProps} />
                                    <RectangularButton label={'Buy now'} link={''} size="small" bgcolor="orange" disabled={(offer?.price ?? 1) * counterProps.count > (profile?.credits ?? 1)} onClick={onBuy} />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}