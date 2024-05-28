/* eslint-disable no-trailing-spaces */
import * as LoginTypes from '../types/login-types';
import * as UserTypes from '../types/user-types';
import * as OrganizationTypes from '../types/organization-types';
import * as CategoriesTypes from '../types/categories-types';
import * as AttachmentTypes from '../types/attachment-types';
import * as OfferTypes from '../types/offer-types';
import { apiErrorFactory } from './api-error-factory';
import { TransactionModel } from '@/types/transaction-types';

const API_BASE_URL = 'https://lojback.ne-quid-nimis.pl/api';


export const Login = {
    /** Logs in a given user [Access: Everyone]
     *
     * userLoginData - Object with user login and password
     */
    async loginEnd(userLoginData: LoginTypes.LoginModel): Promise<Response> {
        return await fetch(`${API_BASE_URL}/Login/Login`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: JSON.stringify(userLoginData)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });
    },
    /** Registers new user (with administrator privileges) [Access: Administrator]
     *
     * user - Object with user data
     */
    async registerForAdminEnd(user: LoginTypes.AdminUserModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Login/RegisterForAdmin`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Logs out the current user [Access: Logged in users] */
    async logoutEnd(): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Login/Logout`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Tests if the user is authorized [Access: Logged in users] */
    async isLoggedInEnd(): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Login/IsLoggedIn`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    }
};
export const User = {
    /** Retrieves information about the current user [Access: Logged in users] */
    async getCurrentUserEnd(): Promise<UserTypes.UserDbModelOrg> {
        const res = await fetch(`${API_BASE_URL}/User/GetCurrentUser`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Registers new user (with manager privileges) [Access: Manager]
     *
     * user - Object with user data
     */
    async addUserEnd(user: UserTypes.UserModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/User/AddUser`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Retrieves list of users from a given organization [Access: Manager, Administrator]
     *
     * organization - Targeted organization only for administration (null will get the user's organization)
     */
    async getUsersEnd(organization?: string): Promise<UserTypes.UserDbModel[]> {
        const res = await fetch(`${API_BASE_URL}/User/GetUsers${organization !== undefined && organization !== 'undefined' ? '?organization=' + organization : '' }`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Edits email of a given user [Access: Logged in users]
     *
     * user - Object of UserDbModel type with new mail
     */
    async editUserMailEnd(user: UserTypes.UserDbModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/User/EditUserMail`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes a given user [Access: Manager, Administrator]
     *
     * user - Data of user
     */
    async deleteUserEnd(user: UserTypes.UserDbModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/User/DeleteUser`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Changes targeted user's credits [Access: Manager, Administrator]
     *
     * login - Targeted user
     *
     * amount - Desired amount for credit change
     */
    async changeCreditsEnd(login: string, amount: number): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/User/ChangeCredits/${amount}`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(login),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Changes password of currently logged in user [Access: Logged in users]
     *
     * password - Desired new password
     */
    async setPasswordEnd(password: string): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/User/SetPassword`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(password),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    }
};
export const Organization = {
    /** Retrieves organizations with types [Access: Administrator] */
    async getOrganizationsEnd(): Promise<OrganizationTypes.OrganizationModel[]> {
        const res = await fetch(`${API_BASE_URL}/Organization/GetOrganizations`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Adds new organization to the system [Access: Administrator]
     *
     * organization - Object of OrganizationModel schema with organization data
     */
    async addOrganizationEnd(organization: OrganizationTypes.OrganizationModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Organization/AddOrganization`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(organization),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes a given organization from the system [Access: Administrator]
     *
     * organization - Targeted organization name
     */
    async deleteOrganizationEnd(organization: string): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Organization/DeleteOrganization`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(organization),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Retrieves organization image with the given name [Access: Logged in users]
     *
     * organization - Targeted organization
     */
    async getOrganizationImageEnd(organization: string): Promise<AttachmentTypes.FileModel> {
        const res = await fetch(`${API_BASE_URL}/Organization/GetOrganizationImage/${organization}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        const file = await res.blob();

        return {
            blob: file,
            type: file.type
        };
    },
    /** Saves image for a given organization [Access: Administrator]
     *
     * organization - Targeted organization
     *
     * image - Form file with the image
     */
    async setOrganizationImageEnd(organization: string, image: FormData): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Organization/SetOrganizationImage/${organization}`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            headers: { 'accept': '*/*' },
            body: image
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes image from a given organization [Access: Administrator]
     *
     * organization - Targeted organization
     */
    async deleteOrganizationImageEnd(organization: string): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Organization/DeleteOrganizationImage/${organization}`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            headers: { 'accept': '*/*', }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    }
};
export const Categories = {
    /** Retrieves list of every category in the system [Access: Logged in users] */
    async getCategoriesEnd(): Promise<CategoriesTypes.CategoryModel[]> {
        const res = await fetch(`${API_BASE_URL}/Categories/GetCategories`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Adds new offer category to the system [Access: Administrator]
     *
     * category - New category
     */
    async addCategoryEnd(category: string): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Categories/AddCategory`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(category),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes a given category from the system [Access: Administrator]
     *
     * category - Targeted category
     */
    async deleteCategoryEnd(category: string): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Categories/DeleteCategory`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify(category),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Retrieves category image with the given name [Access: Logged in users]
     *
     * category - Targeted category
     */
    async getCategoryImageEnd(category: string): Promise<AttachmentTypes.FileModel> {
        const res = await fetch(`${API_BASE_URL}/Categories/GetCategoryImage/${category}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        const file = await res.blob();

        return {
            blob: file,
            type: file.type
        };
    },
    /** Saves image for a given category [Access: Administrator]
     *
     * category - Targeted category
     *
     * image - Form file with the image
     */
    async setCategoryImageEnd(category: string, image: FormData): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Categories/SetCategoryImage/${category}`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            headers: { 'accept': '*/*' },
            body: image
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes image from a given category [Access: Administrator]
     *
     * category - Targeted category
     */
    async deleteCategoryImageEnd(category: string): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Categories/DeleteCategoryImage/${category}`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            headers: { 'accept': '*/*', }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    }
};
export const Offers = {
    /** Retrieves every shop from the system [Access: Logged in users]
     *
     * category - Optional targeted category
     */
    async getShopsEnd(category?: string): Promise<OfferTypes.ShopModel[]> {
        const res = await fetch(`${API_BASE_URL}/Offer/GetShops${category !== undefined ? '?category=' + category : '' }`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Retrieves offers from a given organization [Access: Logged in users]
     *
     * organization - Targeted organization
     */
    async getOffersEnd(organization: string, category?: string): Promise<OfferTypes.ShopOfferModel[]> {
        const res = await fetch(`${API_BASE_URL}/Offer/GetOffers/${organization}${category !== undefined ? '?category=' + category : '' }`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Adds new offer to the system [Access: Administrator]
     *
     * offer - New offer
     */
    async addOfferEnd(offer: OfferTypes.ShopOfferModel): Promise<number> {
        const res = await fetch(`${API_BASE_URL}/Offer/AddOffer`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(offer),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return parseInt(await res.text());
    },
    /** Changes details of an offer [Access: Administrator]
     *
     * offer - Offer object
     */
    async changeOfferEnd(offer: OfferTypes.ShopOfferModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/ChangeOffer`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: JSON.stringify(offer)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes targeted offer [Access: Administrator]
     *
     * ID - Targeted offer ID
     */
    async deleteOfferEnd(ID: number): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/DeleteOffer/${ID}`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            headers: { 'accept': '*/*', }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Sets offer discount details [Access: Administrator]
     *
     * ID - Targeted offer ID
     *
     * discount - Object with discount details (null means clear discount)
     */
    async setOfferDiscountEnd(ID: number, discount?: OfferTypes.ShopDiscountModel): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/SetOfferDiscount/${ID}`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: discount == null ? '' : JSON.stringify(discount)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Retrieves offer image with the given ID [Access: Logged in users]
     *
     * ID - Offer ID
     */
    async getOfferImageEnd(ID: number): Promise<AttachmentTypes.FileModel> {
        const res = await fetch(`${API_BASE_URL}/Offer/GetOfferImage/${ID}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        const file = await res.blob();

        return {
            blob: file,
            type: file.type
        };
    },
    /** Saves image for a given offer [Access: Administrator]
     *
     * file - Form file with the offer image
     *
     * ID - Targeted offer ID
     */
    async setOfferImageEnd(ID: number, image: FormData): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/SetOfferImage/${ID}`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            headers: { 'accept': '*/*' },
            body: image
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Deletes image from a given offer [Access: Administrator]
     *
     * ID - Targeted offer ID
     */
    async deleteOfferImageEnd(ID: number): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/DeleteOfferImage/${ID}`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            headers: { 'accept': '*/*', }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Retrieves list of every code assigned to an offer [Access: Administrator]
     *
     * ID - Targeted offer ID
     */
    async checkOfferCodesEnd(ID: number): Promise<OfferTypes.CodeModel[]> {
        const res = await fetch(`${API_BASE_URL}/Offer/CheckOfferCodes/${ID}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Adds codes to a specified offer [Access: Administrator]
     *
     * ID - Targeted offer ID
     *
     * codes - Array of codes of NewCodeModel schema
     */
    async addCodesEnd(ID: number, codes: OfferTypes.NewCodeModel[]): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/AddCodes/${ID}`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(codes),
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Adds codes from a file to a specified offer [Access: Administrator]
     *
     * ID - Targeted offer ID
     *
     * fileCodes - File with codes formatted in JSON with NewCodeModel schema
     */
    async addCodesFromFileEnd(ID: number, fileCodes: FormData): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/AddCodesFromFile/${ID}`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: { 'accept': '*/*' },
            body: fileCodes
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Changes current state of a given code [Access: Administrator]
     *
     * ID - Targeted offer ID
     *
     * code - Targeted code
     */
    async changeCodeStateEnd(ID: number, code?: number): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/ChangeCodeState/${ID}`, {
            mode: 'cors',
            method: 'PUT',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: code == null ? '' : JSON.stringify(code)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    },
    /** Removes a given code that is not already redeemed [Access: Administrator]
     *
     * ID - Targeted offer ID
     *
     * code - Targeted code
     */
    async deleteCodeEnd(ID: number, code?: number): Promise<string> {
        const res = await fetch(`${API_BASE_URL}/Offer/DeleteCode/${ID}`, {
            mode: 'cors',
            method: 'DELETE',
            credentials: 'include',
            headers: { 'accept': '*/*', 'Content-Type': 'application/json' },
            body: code == null ? '' : JSON.stringify(code)
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.text();
    }
};
export const Transactions = {
    /** Retrieves every transaction done by the current user [Access: Logged in users] */
    async getTransactionsEnd(): Promise<TransactionModel[]> {
        const res = await fetch(`${API_BASE_URL}/Transactions/GetTransactions`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Retrieves every transaction in the system [Access: Administrator]
     *
     * organization - Optional parameter that specifies which shop will be included in the list
     */
    async getAllTransactionsEnd(organization?: string): Promise<TransactionModel[]> {
        const res = await fetch(`${API_BASE_URL}/Transactions/GetAllTransactions${organization !== undefined ? '?organization=' + organization : '' }`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Retrieves information about available code count [Access: Logged in users]
     *
     * offerID - Targeted offer ID
     */
    async checkAvailableCodesEnd(offerID: number): Promise<number> {
        const res = await fetch(`${API_BASE_URL}/Transactions/CheckAvailableCodes/${offerID}`, {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    },
    /** Buys a code from a given offer for the current user [Access: Logged in users]
     *
     * offerID - Targeted offer ID
     * 
     * amount - Amount of codes to buy (default is 1)
     */
    async buyCode(offerID: number, amount?: number): Promise<OfferTypes.NewCodeModel> {
        const res = await fetch(`${API_BASE_URL}/Transactions/BuyCode/${offerID}${amount !== undefined ? '?amount=' + amount : '' }`, {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: { 'accept': '*/*' }
        })
            .then(async (response) => {
                if (!response.ok)
                    throw await apiErrorFactory(response);

                return response;
            });

        return res.json();
    }
};