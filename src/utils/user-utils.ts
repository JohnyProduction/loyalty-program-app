'use client';

import { UserDbModel } from '@/types/user-types';

export function createProfile(userDb: UserDbModel): void {
    const userJson = JSON.stringify(userDb);

    localStorage.setItem('user', userJson);
    window.dispatchEvent(new Event('storage'));
}

export function deleteProfile(): void {
    localStorage.removeItem('user');
    localStorage.clear();
    window.dispatchEvent(new Event('storage'));
}

export function getProfile(): UserDbModel | null {
    const userJson = localStorage.getItem('user');

    if (!userJson) {
        return null;
    }

    return JSON.parse(userJson);
}

export function isLoggedIn(): boolean {
    return Boolean(getProfile());
}