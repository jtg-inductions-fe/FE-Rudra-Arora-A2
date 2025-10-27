import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.typography.pxToRem(10),
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 6, 8, 3),
}));
