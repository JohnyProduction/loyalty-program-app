import { ApiError } from './api-error';

export async function apiErrorFactory(res: Response): Promise<Error> {
    const { status, url } = res;
    const text = await res.text();
    const message = getApiErrorMessage(status, url, text);

    return new ApiError(status, message);
}

// this might need an update in accordance with bugs encountered during the development
function getApiErrorMessage(status: number, url: string, text: string): string {
    const [, apiEndpoint] = url.split('api/');

    if (status === 403) {
        return 'Nie masz wystarczających uprawnień.';
    }

    if (text.length === 0) {
        return 'Wystąpił nieznany błąd';
    }

    if (status === 400) {
        return text;
    }

    if (status === 401) {
        if (apiEndpoint === 'Login/Login') {
            return 'Błędny login lub hasło.';
        }

        if (apiEndpoint === 'Login/Logout') {
            return 'Przestarzały refreshToken, bądź użytkownik wylogowany.';
        }
    }

    if (status === 403) {
        return 'Przestarzały refreshToken, bądź użytkownik wylogowany.';
    }

    if (status === 404) {
        return text;
    }

    return 'Wystąpił nieznany błąd.';
}