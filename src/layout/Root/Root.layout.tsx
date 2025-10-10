import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Sidebar } from '@containers';

export const Root = () => (
    <>
        <Header />
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box sx={{ width: '80%' }}>
                <Outlet />
            </Box>
        </Box>
    </>
);
