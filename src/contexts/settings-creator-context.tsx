'use client';

import { Context, createContext, Dispatch, SetStateAction, useState } from 'react';

interface SettingsCreatorProviderType {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const SettingsCreatorContext: Context<SettingsCreatorProviderType> = createContext(null);

export function SettingsCreatorProvider({ children }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const contextValue = {
        isLoading,
        setIsLoading
    };

    return (
        <SettingsCreatorContext.Provider value={contextValue}>
            {children}
        </SettingsCreatorContext.Provider>
    );
}