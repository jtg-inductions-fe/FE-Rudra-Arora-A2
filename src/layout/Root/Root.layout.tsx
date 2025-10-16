import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header } from '@containers';

export const Root = () => (
    <Box display="flex" sx={{ flexWrap: 'wrap' }}>
        <Header />
        <Box display="flex" width="100%">
            <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
                <Outlet />
            </Box>
        </Box>
    </Box>
);
