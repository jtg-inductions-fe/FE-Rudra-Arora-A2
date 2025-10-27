import { useContext } from 'react';

import { RootContext } from '@context';

export const useRootContext = () => {
    const context = useContext(RootContext);
    if (!context) {
        throw new Error('Nodes must be used within a RootProvider');
    }
    return context;
};
