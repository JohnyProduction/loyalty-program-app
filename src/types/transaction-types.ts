import { ClientOfferModel, NewCodeModel } from './offer-types';

export type TransactionModel = {
    id: number,
    offer: ClientOfferModel,
    code: NewCodeModel,
    date: Date
};
export type DiscountType = '%' | 'zl';