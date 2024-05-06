import { AccountTypes } from './login-types';

export type UserModel = {
    username: string,
    password: string,
    accountType: AccountTypes,
    email: string
};
export type UserDbModel = {
    login: string,
    password: string,
    type: AccountTypes,
    credits: number,
    latestUpdate: Date //might need a change to string
};
export type UserDbModelOrg = UserDbModel & {
    organization: string
};