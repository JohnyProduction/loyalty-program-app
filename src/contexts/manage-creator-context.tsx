'use client';

import { Context, createContext, Dispatch, SetStateAction, useState } from 'react';

interface ManageCreatorProviderType {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    edit: string | undefined;
    setEdit: Dispatch<SetStateAction<string | undefined>>;
}

export const ManageCreatorContext: Context<ManageCreatorProviderType> = createContext(null);

export function SettingsCreatorProvider({ children }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [edit, setEdit] = useState<string>();

    const contextValue = {
        isLoading, setIsLoading,
        edit, setEdit
    };

    return (
        <ManageCreatorContext.Provider value={contextValue}>
            {children}
        </ManageCreatorContext.Provider>
    );
}