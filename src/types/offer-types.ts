export type OfferModel = {
    id?: number,
    name: string,
    price: number,
    organization: string,
    isActive: boolean,
    category?: string,
    discount?: DiscountModel,
    hasImage?: boolean
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
    newPrice?: number,
    expiry: Date
};

export type NewCodeModel = {
    code: number,
    expirt: Date
};

export type CodeModel = NewCodeModel & {
    isUsed: boolean
};