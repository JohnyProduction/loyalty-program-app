'use client';

import { UserDbModel } from '@/types/user-types';

export function createProfile(userDb: UserDbModel): void {
    const userJson = JSON.stringify(userDb);

    sessionStorage.setItem('user', userJson);
    window.dispatchEvent(new Event('storage'));
}

export function deleteProfile(): void {
    sessionStorage.removeItem('user');
    sessionStorage.clear();
    window.dispatchEvent(new Event('storage'));
}

export function getProfile(): UserDbModel | null {
    const userJson = sessionStorage.getItem('user');

    if (!userJson) {
        return null;
    }

    return JSON.parse(userJson);
}

export function updateProfile(user: UserDbModel): void {
    createProfile(user);
}

export function changeUserCredits(amount: number): void {
    const userString = sessionStorage.getItem('user') ?? '{}';
    const user = JSON.parse(userString);

    user.credits += -amount;

    sessionStorage.setItem('user', JSON.stringify(user));
    window.dispatchEvent(new Event('storage'));
}

export function isLoggedIn(): boolean {
    return Boolean(getProfile());
}