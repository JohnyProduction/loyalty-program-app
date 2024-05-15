import { AccountType } from '@/types/login-types';

export function areValidParams(user: string, object: string, action: string): boolean {
    if (user === AccountType.ADMINISTRATOR) {
        const isValidObject = ['users', 'credits', 'organizations', 'password', 'email', 'shops', 'categories'].includes(object);
        const isValidAction = ['add', 'change'].includes(action);

        return isValidObject && isValidAction;
    }

    if (user === AccountType.MANAGER) {
        const isValidObject = ['users', 'credits', 'password'].includes(object);
        const isValidAction = ['add', 'change'].includes(action);

        return isValidObject && isValidAction;
    }

    if (user === AccountType.WORKER) {
        const isValidObject = ['password', 'email'].includes(object);
        const isValidAction = ['change'].includes(action);

        return isValidObject && isValidAction;
    }

    return false;
}