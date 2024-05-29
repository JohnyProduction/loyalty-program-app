'use client';

import { Context, createContext, Dispatch, SetStateAction, useState } from 'react';

interface ManageCreatorProviderType {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    edit: string | undefined;
    setEdit: Dispatch<SetStateAction<string | undefined>>;
    isReFetched: boolean;
    reFetch: () => void;
    needsToRefreshForm: boolean;
    forceRefreshForm: () => void;
}

export const ManageCreatorContext: Context<ManageCreatorProviderType> = createContext(null);

export function ManageCreatorProvider({ children }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [edit, setEdit] = useState<string>();
    const [isReFetched, setIsReFetched] = useState<boolean>(false);
    const [needsToRefreshForm, setForceRefreshForm] = useState<boolean>(false);

    const reFetch = () => setIsReFetched(!isReFetched);

    const forceRefreshForm = () => setForceRefreshForm(!needsToRefreshForm);

    const contextValue = {
        isLoading, setIsLoading,
        edit, setEdit,
        isReFetched, reFetch,
        needsToRefreshForm, forceRefreshForm
    };

    return (
        <ManageCreatorContext.Provider value={contextValue}>
            {children}
        </ManageCreatorContext.Provider>
    );
}