import { AppBar, Box, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    background: theme.palette.secondary.main,
}));

export const StyledImage = styled('img')(({ theme }) => ({
    height: theme.typography.pxToRem(35),
    cursor: 'pointer',
}));

export const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: { display: 'none' },
    [theme.breakpoints.up('md')]: { display: 'flex' },
    alignItems: 'center',
    gap: theme.typography.pxToRem(32),
    marginLeft: theme.typography.pxToRem(8),
    marginTop: theme.typography.pxToRem(5),
}));
