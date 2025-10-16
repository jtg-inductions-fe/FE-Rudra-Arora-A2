import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)(
    ({ theme: { typography, breakpoints } }) => ({
        borderRadius: typography.pxToRem(16),
        width: typography.pxToRem(280),

        [breakpoints.up('md')]: {
            width: typography.pxToRem(320),
        },

        [breakpoints.up('lg')]: {
            width: typography.pxToRem(400),
        },
    }),
);
