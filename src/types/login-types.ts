export type LoginModel = {
    username: string,
    password: string
};
export type AdminUserModel = {
    username: string,
    password: string,
    accountType: AccountTypes,
    email: string,
    organizationName: string
};

export enum AccountTypes {
    ADMINISTRATOR = 'Administrator',
    MANAGER = 'Manager',
    WORKER = 'Worker'
}
