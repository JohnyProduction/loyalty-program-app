export type ContactRequestModel = {
    contReqId?: number,
    contReqDate: Date,
    subject: string,
    body: string
};

export type ContactInfoModel = {
    id?: number,
    name?: string,
    position?: string,
    email: string,
    phone: string
};