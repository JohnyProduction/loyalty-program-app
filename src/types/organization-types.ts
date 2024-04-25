export enum OrgTypes {
    CLIENT = 'Client',
    SHOP = 'Shop',
    SWAGGER = 'Swagger'
}
export type OrganizationModel = {
    name: string,
    type: OrgTypes
};