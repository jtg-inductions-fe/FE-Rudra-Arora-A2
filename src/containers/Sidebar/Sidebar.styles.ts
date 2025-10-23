import { HeaderConstants } from 'containers/Header';

import { Drawer, Stack, styled } from '@mui/material';

export const PermanentDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        marginTop: theme.typography.pxToRem(70),
        width: theme.typography.pxToRem(250),
    },
}));

export const TemporaryDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        marginTop: theme.typography.pxToRem(64),
        width: theme.typography.pxToRem(300),
    },
}));

export const SidebarStack = styled(Stack)(({ theme }) => ({
    height: `calc(100% - ${theme.typography.pxToRem(HeaderConstants.Header_Height_sm)})`,

    [theme.breakpoints.up('md')]: {
        height: `calc(100% - ${theme.typography.pxToRem(HeaderConstants.Header_Height_lg)})`,
    },
}));
