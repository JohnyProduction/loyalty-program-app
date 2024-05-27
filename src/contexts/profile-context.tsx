'use client';

import { Context, createContext, Dispatch, SetStateAction, useState } from 'react';
import { UserDbModel } from '@/types/user-types';

interface ProfileProviderType {
    profile?: UserDbModel;
    setProfile: Dispatch<SetStateAction<UserDbModel | undefined>>;
}

export const ProfileContext: Context<ProfileProviderType> = createContext(null);

export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState<UserDbModel>();

    const contextValue = {
        profile, setProfile
    };

    return (
        <ProfileContext.Provider value={contextValue}>
            {children}
        </ProfileContext.Provider>
    );
}