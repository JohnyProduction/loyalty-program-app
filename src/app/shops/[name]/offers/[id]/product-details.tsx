'use client';

import styles from '@/styles/app/shops/[name]/offers/[id]/product.module.scss';
import { InputCounter } from '@/components/common/inputs/input-counter';
import { RectangularButton } from '@/components/common/buttons/rectangular-button';
import Link from 'next/link';
import { useCounter } from '@/hooks/use-counter';
import { useGetOffer } from '@/hooks/use-get-offer';
import { Loader } from '@/components/common/loader';
import { useParams } from 'next/navigation';

interface ProductDetailsProps {
    productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
    const { name: organization, id: offerId } = useParams();
    const counterProps = useCounter(0);
    const { offer, isLoading, image, isLoadingImage } = useGetOffer(organization.toString(), Number(offerId));

    const renderTotalPrice = (price: number) => {
        return `${price * counterProps.count} PKT`;
    };

    const imageLoadingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const imageStyle = {
        backgroundImage: `url(${image ? URL.createObjectURL(image.blob) : '/pages/no-photo.png'})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };

    return (
        <div className={styles['product-details']}>
            {isLoading
                ? <Loader isAbsolute={true} />
                : (
                    <>
                        <div className={styles['image-container']} style={isLoadingImage ? imageLoadingStyle : imageStyle}>
                            {isLoadingImage && <Loader />}
                        </div>
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
                                        {/*<div className={styles['details-information__information-box']}>*/}
                                        {/*    <img src="/pages/products/location-pin.png" alt="Location pin" />*/}
                                        {/*    <p>sklep internetowy</p>*/}
                                        {/*</div>*/}
                                        {/*<div className={styles['details-information__information-box']}>*/}
                                        {/*    <img src="/pages/products/calendar.png" alt="Calendar" />*/}
                                        {/*    <p>ważna do 25.03.2025</p>*/}
                                        {/*</div>*/}
                                        <div className={styles['details-information__information-box']}>
                                            <img src="/pages/products/web.png" alt="Web" />
                                            <p><Link href={`/shops/${organization}/offers`}>More offers</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className={styles['details-transaction']}>
                                <p className={styles['product-cost']}>{renderTotalPrice(offer!.price)}</p>
                                <div className={styles['transaction-box']}>
                                    <InputCounter {...counterProps} />
                                    <RectangularButton label={'Buy now'} link={'/'} size="small" bgcolor="orange" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}