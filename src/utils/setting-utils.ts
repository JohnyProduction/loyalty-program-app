export function areValidParams(user: string, object: string, action: string): boolean {
    if (user === 'admin') {
        const isValidObject = ['users', 'credits', 'organizations'].includes(object);
        const isValidAction = ['add'].includes(action);

        return isValidObject && isValidAction;
    }

    if (user === 'manager') {
        const isValidObject = ['workers', 'managers', 'credits', 'password'].includes(object);
        const isValidAction = ['add', 'change'].includes(action);

        return isValidObject && isValidAction;
    }

    if (user === 'worker') {
        const isValidObject = ['password', 'email'].includes(object);
        const isValidAction = ['change'].includes(action);

        return isValidObject && isValidAction;
    }

    return false;
}