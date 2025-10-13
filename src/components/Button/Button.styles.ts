import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(12),
    textTransform: 'none',
    padding: theme.spacing(2.25, 3.7),
    boxShadow: 'none',
    background: theme.palette.primary.main,
}));
