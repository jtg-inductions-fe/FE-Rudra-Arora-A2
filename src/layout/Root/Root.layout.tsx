import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Sidebar } from '@containers';

export const Root = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const [isSidebarClosing, setIsSidebarClosing] = useState(false);

    const handleDrawerClose = () => {
        setIsSidebarClosing(true);
        setMobileSidebarOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsSidebarClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isSidebarClosing) {
            setMobileSidebarOpen(!mobileSidebarOpen);
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
