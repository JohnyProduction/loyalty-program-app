import styles from '@/styles/app/products/[id]/page.module.scss';
import { InputCounter } from '@/components/common/inputs/input-counter';

interface ProductDetailsProps {
    productId: string;
}

export function ProductDetails({ productId }: ProductDetailsProps) {
    return (
        <div className={styles['product-details']}>
            <div className={styles['image-container']}></div>
            <div className={styles['details-container']}>
                <div className={styles['details-information']}>
                    <div className={styles['details-information__container']}>
                        <div>
                            <p className={styles['details-information__brand']}>Brand: Empik</p>
                            <p className={styles['details-information__product-id']}>ID produktu: 1111</p>
                            <p className={styles['details-information__product-name']}>Karta podarunkowa Empik</p>
                        </div>
                    </div>
                    <div className={styles['details-information__container']}>
                        <div>
                            <div className={styles['details-information__information-box']}>
                                <img src="/pages/products/location-pin.png" alt="Location pin" />
                                <p>sklep internetowy</p>
                            </div>
                            <div className={styles['details-information__information-box']}>
                                <img src="/pages/products/calendar.png" alt="Calendar" />
                                <p>ważna do 25.03.2025</p>
                            </div>
                            <div className={styles['details-information__information-box']}>
                                <img src="/pages/products/web.png" alt="Web" />
                                <p>www.empik.pl</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles['details-transaction']}>
                    <p className={styles['product-cost']}>100 PKT</p>
                    <div className={styles['transaction-box']}>
                        <InputCounter />
                        <div>Buy now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}