import { Button, ButtonProps, styled } from '@mui/material';

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(12),
    textTransform: 'none',
    padding: theme.spacing(2, 4),
    boxShadow: 'none',
    background: theme.palette.primary.main,
}));
