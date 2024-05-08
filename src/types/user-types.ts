import { AccountType } from './login-types';

export type UserModel = {
    username: string,
    password: string,
    accountType?: AccountType,
    email?: string
};
export type UserDbModel = {
    login: string,
    email?: string,
    type: AccountType,
    credits: number,
    latestUpdate?: Date //might need a change to string
};
export type UserDbModelOrg = UserDbModel & {
    organization: string
};