import { createContext, ReactNode, useState } from 'react';

import { RootContextType } from './Root.context.types';

export const RootContext = createContext<RootContextType | undefined>(
    undefined,
);

export const RootContextProvider = ({ children }: { children: ReactNode }) => {
    /**
     * State for the sidebar open and close
     */
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    /**
     * State for handling transition of sidebar
     */
    const [isSidebarClosing, setIsSidebarClosing] = useState(false);

    /**
     * Function for handling Drawer close
     */
    const handleDrawerClose = () => {
        setIsSidebarClosing(true);
        setMobileSidebarOpen(false);
    };

    /**
     * Function for handling drawer transition
     */
    const handleDrawerTransitionEnd = () => {
        setIsSidebarClosing(false);
    };

    /**
     * Function for handling drawer toggle between closing and opening
     */
    const handleDrawerToggle = () => {
        if (!isSidebarClosing) {
            setMobileSidebarOpen((prev) => !prev);
        }
    };

    return (
        <RootContext.Provider
            value={{
                mobileSidebarOpen,
                isSidebarClosing,
                handleDrawerClose,
                handleDrawerToggle,
                handleDrawerTransitionEnd,
            }}
        >
            {children}
        </RootContext.Provider>
    );
};
