import { Link } from 'react-router-dom';

import { ListItemButton, ListItemButtonProps, styled } from '@mui/material';

type StyledListItemButtonProps = ListItemButtonProps & {
    to?: string;
    component?: typeof Link | 'button';
};

export const StyledListItemButton = styled(
    ListItemButton,
)<StyledListItemButtonProps>(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(12),
    padding: theme.spacing(1),
    margin: theme.spacing(2, 4),
    gap: theme.spacing(4),
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));
