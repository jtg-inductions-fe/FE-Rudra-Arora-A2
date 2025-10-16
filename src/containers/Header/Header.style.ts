import { AppBar, Box, IconButton, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme: { palette } }) => ({
    width: '100%',
    position: 'fixed',
    background: palette.secondary.main,
    boxShadow: 'none',
}));

export const HeaderBox = styled(Box)(({ theme: { spacing, mixins } }) => ({
    ...mixins.flex('flex-start', 'stretch', spacing(8)),
    marginLeft: spacing(2),
    marginTop: spacing(1),
}));

export const ToolbarBox = styled(Box)(
    ({ theme: { spacing, breakpoints, mixins } }) => ({
        marginTop: spacing(2),
        marginRight: spacing(2),
        ...mixins.flex('flex-start', 'stretch', spacing(2)),
        height: spacing(8),
        [breakpoints.up('md')]: {
            gap: spacing(3),
        },
    }),
);

export const StyledIconButton = styled(IconButton)(
    ({ theme: { palette, spacing } }) => ({
        marginLeft: spacing(0),
        marginTop: spacing(1),
        color: palette.text.primary,
    }),
);
