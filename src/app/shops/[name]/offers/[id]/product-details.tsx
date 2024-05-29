'use client';

import styles from '@/styles/app/shops/[name]/offers/[id]/product.module.scss';
import { InputCounter } from '@/components/common/inputs/input-counter';
import { RectangularButton } from '@/components/common/buttons/rectangular-button';
import Link from 'next/link';
import { useCounter } from '@/hooks/use-counter';
import { useGetOffer } from '@/hooks/use-get-offer';
import { useParams } from 'next/navigation';
import { OfferImage } from '@/app/shops/[name]/offers/[id]/offer-image';
import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '@/contexts/profile-context';
import { Offers, Transactions } from '@/api/api';
import { toastError, toastSuccess } from '@/utils/toast-utils';
import { Loader } from '@/components/common/loader';
import { FormRefetchContext } from '@/contexts/form-refetch-context';
import { useCodes } from '@/hooks/use-codes';
import { UserDbModel } from '@/types/user-types';
import { InputSelect, OptionType } from '@/components/common/inputs/input-select';
import { DiscountType, ShopDiscountModel, ShopOfferModel } from '@/types/offer-types';
import { InputNumber } from '@/components/common/inputs/input-number';
import { SubmitButton } from '@/components/common/buttons/submit-button';
import { InputDate } from '@/components/common/inputs/input-date';
import { OfferImageForm } from '@/app/shops/[name]/offers/[id]/offer-image-form';
import { Icon } from '@/components/common/icon';
import { AccountType } from '@/types/login-types';

interface ProductDetailsProps {
    productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
    const { name: organization, id: offerId } = useParams();
    const counterProps = useCounter(0);
    const { profile, setProfile } = useContext(ProfileContext);
    const { refetch, forceRefetch } = useContext(FormRefetchContext);
    const { offer, isLoading, image, isLoadingImage, refetchOffer } = useGetOffer(organization.toString(), Number(offerId));
    const { codes, refetch: refetchCodes } = useCodes(Number(offerId));
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const [promotion, setPromotion] = useState<DiscountType>(DiscountType.PERCENT);
    const onChangePromotion = (e: any) => setPromotion(e.target.value);
    const [promotionValue, setPromotionValue] = useState<number>(0);
    const onChangePromotionValue = (e: any) => setPromotionValue(Number(e.target.value));
    const [promotionExpiry, setPromotionExpiry] = useState<Date>(new Date());
    const onChangePromotionExpiry = (e: any) => setPromotionExpiry(e.target.value);
    const promotionOptions: OptionType[] = [
        { id: 1, label: 'Percentage', value: DiscountType.PERCENT },
        { id: 2, label: 'Absolute', value: DiscountType.ABSOLUTE }
    ];

    const onSetPromotion = async () => {
        const { setOfferDiscountEnd } = Offers;
        const discount: ShopDiscountModel = {
            amount: promotionValue,
            type: promotion,
            expiry: promotionExpiry
        };
        setIsSubmitting(true);

        try {
            const res = await setOfferDiscountEnd(Number(offerId), discount);

            toastSuccess(res);
            refetchOffer();
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        refetchCodes();
    }, [forceRefetch]);

    const renderTotalPrice = (price?: number) => {
        if (offer?.discount?.newPrice) {
            const diff = offer.price - offer.discount.newPrice;
            const totalDiff = diff * counterProps.count;

            return `${offer.discount.newPrice * counterProps.count} PKT (-${totalDiff} PKT)`;
        }

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
            await buyCode(id, counterProps.count);

            const newProfile: UserDbModel = {
                ...profile as UserDbModel,
                credits: (profile?.credits ?? 0) - totalCost
            };
            setProfile(newProfile);

            toastSuccess(`You have successfully bought ${counterProps.count} codes.`);
            refetch();
            refetchCodes();
        } catch (err: any) {
            toastError(`Error: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isDisabledPurchase = () => {
        if (counterProps.count > codes) {
            return true;
        }

        if (offer?.discount?.newPrice) {
            const pointsLimit = offer.discount.newPrice * counterProps.count > (profile?.credits ?? 1);

            if (pointsLimit) {
                return true;
            }
        }

        return (offer?.price ?? 1) * counterProps.count > (profile?.credits ?? 1);
    };

    const onEditOfferName = async () => {
        const name = prompt('Type a new offer name');

        if (!name || name.length === 0) {
            return;
        }

        if (!offer) {
            return;
        }

        const { changeOfferEnd } = Offers;
        const newOffer: ShopOfferModel = { ...offer, name };
        setIsSubmitting(true);

        try {
            const res = await changeOfferEnd(newOffer);

            toastSuccess(res);
            refetchOffer();
        } catch (err: any) {
            toastError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
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
                                            <p className={styles['details-information__product-id']}>ID
                                            produktu: {productId}</p>
                                            <p className={styles['details-information__product-name']}>
                                                {offer?.name}
                                                {profile?.type === AccountType.ADMINISTRATOR && <Icon src={'/pages/edit.png'} size={32} onClick={onEditOfferName} />}
                                            </p>
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
                                        <RectangularButton label={'Buy now'} link={''} size="small" bgcolor="orange"
                                            disabled={isDisabledPurchase()} onClick={onBuy} />
                                    </div>
                                    <div className={styles['available-codes-amount']}>
                                        {codes ? `${codes} code${codes > 1 ? 's' : ''} available` : 'There is no code available.'}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            <div className={styles['product-promotion-container']}>
                <OfferImageForm />
                <InputSelect label={'Select promotion'} name={'promotion'} options={promotionOptions} value={promotion}
                    onChange={onChangePromotion} />
                <InputNumber label={`Promotion value (${promotion === DiscountType.ABSOLUTE ? `1-${(offer?.price ?? 0) * counterProps.count}PKT` : '1-100%'})`} name={'promotion-value'} value={promotionValue}
                    onChange={onChangePromotionValue} />
                <InputDate label={'Promotion expiry'} name={'promotion-expiry'} value={promotionExpiry} onChange={onChangePromotionExpiry} />
                <SubmitButton label={'Set promotion'} onSubmit={onSetPromotion} size={'small'} />
            </div>
        </>
    );
}