import { AccountType } from '@/types/login-types';

export type LinkDataType = Record<AccountType, LinkRecord[]>;

export interface LinkRecord {
    label: string;
    path: string;
}