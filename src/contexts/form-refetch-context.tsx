'use client';

import { Context, createContext, useState } from 'react';

interface FormRefetchProviderType {
    forceRefetch: boolean;
    refetch: () => void;
}

export const FormRefetchContext: Context<FormRefetchProviderType> = createContext(null);

export function FormRefetchProvider({ children }) {
    const [forceRefetch, setForceRefetch] = useState<boolean>(false);

    const refetch = () => {
        setForceRefetch(!forceRefetch);
    };

    const contextValue = {
        forceRefetch, refetch
    };

    return (
        <FormRefetchContext.Provider value={contextValue}>
            {children}
        </FormRefetchContext.Provider>
    );
}