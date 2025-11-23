import { ListItemButton, styled } from '@mui/material';

import { StyledListItemButtonProps } from './Menu.types';

export const StyledListItemButton = styled(
    ListItemButton,
)<StyledListItemButtonProps>(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(12),
    padding: theme.spacing(1),
    margin: theme.spacing(2, 2, 2, 5),
    gap: theme.spacing(4),
    width: '90%',
}));
