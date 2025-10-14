import { AppBar, Box, IconButton, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    width: '100%',
    position: 'fixed',
    background: theme.palette.secondary.main,
    boxShadow: 'none',
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: { display: 'none' },
    [theme.breakpoints.up('md')]: { display: 'flex' },
    gap: theme.spacing(8),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
}));

export const ToolbarBox = styled(Box)(({ theme }) => ({
    marginTop: 2,
    marginRight: 2,
    display: 'flex',
    gap: theme.spacing(2),
    height: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
        gap: theme.spacing(3),
    },
}));

export const StyledIconButton = styled(IconButton)(
    ({ theme: { palette, breakpoints } }) => ({
        marginLeft: 0,
        marginTop: 1,
        color: palette.text.primary,

        [breakpoints.up('md')]: {
            display: 'none',
        },
    }),
);
