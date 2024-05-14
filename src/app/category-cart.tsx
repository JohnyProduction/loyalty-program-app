import { CategoryModel } from '@/types/categories-types';
import { useCategoryImage } from '@/hooks/use-category-image';
import { BrowseProduct } from '@/app/browse-product';
import { ProductType } from '@/types/main-page-types';

interface CategoryCartProps {
    category: CategoryModel;
}

export function CategoryCart({ category }: CategoryCartProps) {
    const { isLoading, url } = useCategoryImage(category.name);
    const product: ProductType = {
        name: category.name,
        imageUrl: url
    };

    return <>{isLoading ? 'Loading image...' : <BrowseProduct product={product} />}</>;
}