'use client';

import { UserDbModel } from '@/types/user-types';

export function createProfile(userDb: UserDbModel): void {
    const userJson = JSON.stringify(userDb);

    sessionStorage.setItem('user', userJson);
}

export function deleteProfile(): void {
    sessionStorage.removeItem('user');
}

export function getProfile(): UserDbModel | null {
    const userJson = sessionStorage.getItem('user');

    if (!userJson) {
        return null;
    }

    return JSON.parse(userJson);
}

export function isLoggedIn(): boolean {
    return Boolean(getProfile());
}