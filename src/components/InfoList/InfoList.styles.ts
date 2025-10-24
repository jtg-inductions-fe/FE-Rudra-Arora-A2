import { ListItem, ListItemAvatar, styled } from '@mui/material';

export const StyledListItem = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(2, 0),
    gap: theme.spacing(1),
    alignItems: 'center',
    '&:not(:last-child)': {
        borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.divider}`,
    },
}));

export const StyledListItemAvatar = styled(ListItemAvatar)(({ theme }) => ({
    minWidth: theme.typography.pxToRem(32),
}));
