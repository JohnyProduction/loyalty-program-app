import * as LoginTypes from '../../types/login-types';
import * as UserTypes from '../../types/user-types';
import { apiErrorFactory } from './api-error-factory';

const API_BASE_URL = 'https://lojback.ne-quid-nimis.pl/api';


export const Login = {
    /** Logs in a given user */
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
    /** Registers new user (with administrator privileges) */
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
    /** Logs out the current user */
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
    /** Tests if the user is authorized */
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
    /** Registers new user (with manager privileges) */
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
    /** Retrieves list of users from a given organization */
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
    /** Edits email of a given user */
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
    /** Deletes a given user */
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
    /** Changes targeted user's credits */
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
    /** Changes password of currently logged in user */
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