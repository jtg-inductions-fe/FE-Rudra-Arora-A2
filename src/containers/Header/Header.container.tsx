import { Link, useNavigate } from 'react-router-dom';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    Avatar,
    Divider,
    IconButton,
    Toolbar,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import logo from '@assets/images/Logo.webp';
import { AvatarComponent, AvatarSkeleton, SearchBar } from '@components';
import { useProductsData, useUserData } from '@hooks';
import { ROUTES } from '@routes';

import {
    HeaderBox,
    StyledAppBar,
    StyledIconButton,
    ToolbarBox,
} from './Header.style';
import { HeaderProps } from './Header.types';

export const Header = ({ handleDrawerToggle }: HeaderProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const productResponse = useProductsData();

    const searchItems =
        productResponse.data?.map((item) => item.productName) ?? [];

    const userResponse = useUserData();

    const userData = userResponse.data && {
        userName: userResponse.data.userName,
        userImage: userResponse.data.userImage,
        userEmail: userResponse.data.userEmail,
    };

    const handleSearchChange = (label: string) => {
        const value = label.split(' ').join('-').toLowerCase();
        void navigate(`${ROUTES.PRODUCTS}/${value}`);
    };

    return (
        <>
            <StyledAppBar sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar
                    sx={{ justifyContent: 'space-between', height: '100%' }}
                >
                    {!isDesktop ? (
                        <StyledIconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            aria-controls="sidebar-drawer"
                        >
                            <MenuOpenIcon
                                sx={{ fontSize: theme.typography.pxToRem(32) }}
                            />
                        </StyledIconButton>
                    ) : (
                        <HeaderBox>
                            <IconButton
                                sx={{ p: 0 }}
                                component={Link}
                                to={ROUTES.ROOT}
                                aria-label="Main Logo"
                            >
                                <Avatar src={logo} alt="main logo" />
                            </IconButton>
                            <SearchBar
                                searchItems={searchItems}
                                handleSearchChange={handleSearchChange}
                            />
                        </HeaderBox>
                    )}

                    <ToolbarBox>
                        <IconButton
                            sx={{
                                color: theme.palette.common.black,
                                boxShadow: theme.shadows[4],
                                p: 1,
                            }}
                            component={Link}
                            to={ROUTES.NOTIFICATIONS}
                            aria-label="Notifications"
                        >
                            <NotificationsIcon
                                sx={{ fontSize: theme.typography.pxToRem(24) }}
                            />
                        </IconButton>

                        {userData ? (
                            <AvatarComponent
                                data={userData}
                                buttonText="Manage Profile"
                                buttonRoute={ROUTES.MANAGE_PROFILE}
                            />
                        ) : (
                            <AvatarSkeleton />
                        )}
                    </ToolbarBox>
                </Toolbar>
                <Divider />
            </StyledAppBar>
        </>
    );
};
