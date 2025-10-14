import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(
    ({ theme: { breakpoints, typography } }) => ({
        flexGrow: 1,
        overflow: 'auto',
        marginTop: typography.pxToRem(82),

        [breakpoints.up('md')]: {
            marginLeft: typography.pxToRem(260),
            marginTop: typography.pxToRem(100),
        },
    }),
);
