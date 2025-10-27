import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { Header, Sidebar } from '@containers';
import { RootContextProvider } from '@context';

import { StyledStack } from './Root.styles';

export const Root = () => (
    <RootContextProvider>
        <Header />
        <Box display="flex" width="100%">
            <Sidebar />
            <StyledStack component="main">
                <Outlet />
            </StyledStack>
        </Box>
    </RootContextProvider>
);
