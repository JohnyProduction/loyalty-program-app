import { User } from '@/api/api';
import { toastError } from '@/utils/toast-utils';

export async function deleteUser(login: string, organization?: string) {
    const { getCurrentUserEnd, getUsersEnd, deleteUserEnd } = User;

    try {
        const currentUser = await getCurrentUserEnd();
        const users = await getUsersEnd(organization);
        const user = users.find(u => u.login === login);

        if (!user) {
            throw new Error(`Cannot find user with ${login} login.`);
        }

        if (currentUser.login === login) {
            throw new Error('You cannot delete your account.');
        }

        await deleteUserEnd(user);
    } catch (err: any) {
        toastError(`Error: ${err.message}`);
    }
}