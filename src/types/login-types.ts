export type LoginModel = {
    username: string,
    password: string
};
export type AdminUserModel = {
    username: string,
    password: string,
    accountType: AccountType,
    email: string,
    organizationName: string
};

export enum AccountType {
    ADMINISTRATOR = 'Administrator',
    MANAGER = 'Manager',
    WORKER = 'Worker'
}