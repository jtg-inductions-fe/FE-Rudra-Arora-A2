import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(
    ({ theme: { mixins, spacing, typography } }) => ({
        ...mixins.flexCenter('column'),
        gap: spacing(4),
        textAlign: 'center',
        maxWidth: typography.pxToRem(1320),
        margin: 'auto',
    }),
);
