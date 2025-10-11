import { AppBar, Box, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    background: theme.palette.secondary.main,
    boxShadow: 'none',
}));

export const StyledImage = styled('img')(({ theme }) => ({
    height: theme.typography.pxToRem(35),
    cursor: 'pointer',
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: { display: 'none' },
    [theme.breakpoints.up('md')]: { display: 'flex' },
    gap: theme.typography.pxToRem(32),
    marginLeft: theme.typography.pxToRem(8),
    marginTop: theme.typography.pxToRem(5),
}));

export const ToolbarBox = styled(Box)(({ theme }) => ({
    mt: 2,
    mr: 2,
    display: 'flex',
    gap: theme.typography.pxToRem(8),
    height: theme.typography.pxToRem(32),
    [theme.breakpoints.up('md')]: {
        gap: theme.typography.pxToRem(12),
    },
}));
