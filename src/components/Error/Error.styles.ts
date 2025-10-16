import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexCenter('column'),
    gap: theme.spacing(4),
    textAlign: 'center',
}));
