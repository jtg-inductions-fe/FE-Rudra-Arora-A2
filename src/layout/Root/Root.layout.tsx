import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Sidebar } from '@containers';

import { StyledStack } from './Root.styles';

export const Root = () => {
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
        <>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Box display="flex" width="100%">
                <Box component="aside">
                    <Sidebar
                        handleDrawerClose={handleDrawerClose}
                        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
                        mobileSidebarOpen={mobileSidebarOpen}
                    />
                </Box>
                <StyledStack component="main">
                    <Outlet />
                </StyledStack>
            </Box>
        </>
    );
};
