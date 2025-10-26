import { Box, styled } from '@mui/material';

import { HeaderConstants } from '@containers';

export const StyledBox = styled(Box)(
    ({ theme: { mixins, spacing, typography, breakpoints } }) => ({
        ...mixins.flexCenter('column'),
        gap: spacing(4),
        textAlign: 'center',
        maxWidth: typography.pxToRem(1320),
        margin: 'auto',
        height: `calc(90vh - ${typography.pxToRem(HeaderConstants.Header_Height_sm)})`,

        [breakpoints.up('md')]: {
            height: `calc(90vh - ${typography.pxToRem(HeaderConstants.Header_Height_lg)})`,
        },
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
