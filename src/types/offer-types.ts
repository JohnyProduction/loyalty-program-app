export type OfferModel = {
    id?: number,
    name: string,
    price: number,
    organization: string,
    category?: string,
    hasImage?: boolean
};

export type ClientOfferModel = OfferModel & {
    shopDiscount?: DiscountModel
};

export type ShopOfferModel = OfferModel & {
    isActive: boolean,
    discount?: ShopDiscountModel
};

export enum DiscountType {
    ABSOLUTE = 'Absolute',
    PERCENT = 'Percent'
}

export type DiscountModel = {
    id?: number,
    name?: string,
    amount: number,
    type: DiscountType,
    newPrice?: number
};

export type ShopDiscountModel = DiscountModel & {
    expiry: Date
};

export type NewCodeModel = {
    code: number,
    expirt: Date
};

export type CodeModel = NewCodeModel & {
    isUsed: boolean
};