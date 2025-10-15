import { ListItemButton, styled } from '@mui/material';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(12),
    padding: theme.spacing(1),
    margin: theme.spacing(2, 4),
    gap: theme.spacing(4),
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));
