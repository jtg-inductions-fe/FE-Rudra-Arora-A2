import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(
    ({ theme: { mixins, spacing, typography } }) => ({
        ...mixins.flexCenter('column'),
        height: '100vh',
        gap: spacing(4),
        textAlign: 'center',
        maxWidth: typography.pxToRem(1320),
        margin: 'auto',
    }),
);

export const StyledImage = styled('img')(({ theme: { breakpoints } }) => ({
    width: '70%',
    height: 'auto',
    pointerEvents: 'none',
    [breakpoints.up('sm')]: {
        width: '40%',
    },
}));
