import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import { IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { Menu } from '@components';

import { sidebarConfig } from './Sidebar.config';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
    handleDrawerClose,
    handleDrawerTransitionEnd,
    mobileSidebarOpen,
}: SidebarProps) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const drawerWidth = !isDesktop
        ? theme.typography.pxToRem(300)
        : theme.typography.pxToRem(250);

    const drawer = (
        <Box>
            <Stack justifyContent="space-between" height={'90vh'}>
                <Menu Config={sidebarConfig} />
                <Box sx={{ textAlign: 'center' }}>
                    <IconButton
                        color="inherit"
                        sx={{ transform: 'rotate(90deg)' }}
                        aria-label="tune filters"
                    >
                        <TuneIcon />
                    </IconButton>

                    <IconButton color="inherit" aria-label="change language">
                        <PublicIcon />
                    </IconButton>

                    <IconButton color="inherit" aria-label="open settings">
                        <SettingsIcon />
                    </IconButton>
                </Box>
            </Stack>
        </Box>
    );

    return (
        <Box component="nav" aria-label="primary navigation">
            {!isDesktop ? (
                <Drawer
                    variant="temporary"
                    open={mobileSidebarOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ id: 'sidebar-drawer' }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            marginTop: !isTablet
                                ? theme.typography.pxToRem(53)
                                : theme.typography.pxToRem(65),
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            ) : (
                <Drawer
                    variant="permanent"
                    PaperProps={{ id: 'sidebar-drawer' }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            marginTop: theme.typography.pxToRem(65),
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            )}
        </Box>
    );
};
