import styles from '@/styles/app/shops/[name]/offers/[id]/product.module.scss';
import { Loader } from '@/components/common/loader';
import { FileModel } from '@/types/attachment-types';
import { memo } from 'react';

interface OfferImageProps {
    image?: FileModel;
    isLoadingImage: boolean;
}

export const OfferImage = memo(({ isLoadingImage, image }: OfferImageProps) => {
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
        <div className={styles['image-container']} style={isLoadingImage ? imageLoadingStyle : imageStyle}>
            {isLoadingImage && <Loader />}
        </div>
    );
});