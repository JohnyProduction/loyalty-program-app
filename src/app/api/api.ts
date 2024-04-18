import * as LoginTypes from '../../types/login-types';
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