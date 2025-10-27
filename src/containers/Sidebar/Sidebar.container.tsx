import { Link } from 'react-router-dom';

import { Box, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Menu } from '@components';
import { useRootContext } from '@hooks';

import { sidebarConfig } from './Sidebar.config';
import {
    PermanentDrawer,
    SidebarStack,
    TemporaryDrawer,
} from './Sidebar.styles';

export const Sidebar = () => {
    const { handleDrawerClose, handleDrawerTransitionEnd, mobileSidebarOpen } =
        useRootContext();

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const drawer = (
        <SidebarStack justifyContent="space-between">
            <Box
                sx={{
                    ...theme.mixins.hideVerticalScrollbar(),
                }}
            >
                <Menu
                    handleDrawerClose={handleDrawerClose}
                    config={sidebarConfig.navHeader}
                />
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
        <Box component="aside" aria-label="primary navigation">
            {isDesktop ? (
                <PermanentDrawer
                    variant="permanent"
                    PaperProps={{ id: 'sidebar-drawer' }}
                    open
                    component="nav"
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
                    component="nav"
                >
                    {drawer}
                </TemporaryDrawer>
            )}
        </Box>
    );
};
