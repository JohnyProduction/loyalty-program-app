/* eslint-disable no-trailing-spaces */
import * as LoginTypes from '../../types/login-types';
import * as UserTypes from '../../types/user-types';
import * as OrganizationTypes from '../../types/organization-types';
import { apiErrorFactory } from './api-error-factory';

const API_BASE_URL = 'https://lojback.ne-quid-nimis.pl/api';


export const Login = {
    /** Logs in a given user [Access: Everyone]
     * 
     * userLoginData - Object with user login and password
     */
    async loginEnd(userLoginData: LoginTypes.LoginModel): Promise<Response> {
        const res = await fetch(`${API_BASE_URL}/Login/Login`, {
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

        return res;
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
        const res = await fetch(`${API_BASE_URL}/User/GetUsers${organization !== undefined ? '?organization=' + organization : '' }`, {
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
    }
};