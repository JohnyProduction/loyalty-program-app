import styles from '@/styles/app/products/[id]/page.module.scss';

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
                            <div>sklep internetowy</div>
                            <div>ważna do 25.03.2025</div>
                            <div>www.empik.pl</div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    100 PKT
                </div>
            </div>
        </div>
    );
}