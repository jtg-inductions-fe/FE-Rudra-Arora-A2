import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Sidebar } from '@containers';

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
        <Box display="flex" sx={{ flexWrap: 'wrap' }}>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Box display="flex" width="100%">
                <Sidebar
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerTransitionEnd={handleDrawerTransitionEnd}
                    mobileSidebarOpen={mobileSidebarOpen}
                />
                <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};
