import { Link } from 'react-router-dom';

import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Menu } from '@components';

import { sidebarConfig } from './Sidebar.config';
import {
    PermanentDrawer,
    SidebarStack,
    TemporaryDrawer,
} from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
    handleDrawerClose,
    handleDrawerTransitionEnd,
    mobileSidebarOpen,
}: SidebarProps) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <SidebarStack justifyContent="space-between">
            <Box sx={{ overflowY: 'auto' }}>
                <Menu config={sidebarConfig.navHeader} />
            </Box>
            <Stack
                flexDirection="row"
                justifyContent="center"
                gap={theme.typography.pxToRem(22)}
                padding={theme.spacing(4, 0)}
            >
                {sidebarConfig.navFooter.map((item) => (
                    <IconButton
                        color="inherit"
                        key={item.title}
                        sx={{ transform: 'rotate(90deg)', p: 0 }}
                        aria-label="Navbar Footer Icons"
                        component={Link}
                        to={item.route ?? ''}
                    >
                        {item.icon && <item.icon />}
                    </IconButton>
                ))}
            </Stack>
        </SidebarStack>
    );

    return (
        <Box component="nav" aria-label="primary navigation">
            {isDesktop ? (
                <PermanentDrawer
                    variant="permanent"
                    PaperProps={{ id: 'sidebar-drawer' }}
                    open
                >
                    {drawer}
                </PermanentDrawer>
            ) : (
                <TemporaryDrawer
                    variant="temporary"
                    open={mobileSidebarOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ id: 'sidebar-drawer' }}
                >
                    {drawer}
                </TemporaryDrawer>
            )}
        </Box>
    );
};
