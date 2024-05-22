import { AccountType } from '@/types/login-types';

export type LinkDataType = Record<AccountType.ADMINISTRATOR | AccountType.MANAGER, LinkRecord[]>;

export interface LinkRecord {
    label: string;
    path: string;
}