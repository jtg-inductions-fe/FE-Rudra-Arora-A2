import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useTheme } from '@mui/material';

import { useRootContext } from '@hooks';

import { StyledIconButton } from './Menu.styles';
export const Menu = () => {
    const theme = useTheme();
    const { handleDrawerToggle } = useRootContext();
    return (
        <StyledIconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            aria-controls="sidebar-drawer"
        >
            <MenuOpenIcon sx={{ fontSize: theme.typography.pxToRem(32) }} />
        </StyledIconButton>
    );
};
