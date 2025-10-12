import { MouseEvent, useState } from 'react';

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
import { CustomModal, ModalSkeleton, SearchBar } from '@components';
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

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const productResponse = useProductsData();

    const searchItems =
        productResponse.data?.map((item) => item.productName) ?? [];

    const userResponse = useUserData();

    const handleModalOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleModalClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (label: string) => {
        const value = label.split(' ').join('-').toLowerCase();
        void navigate(`${ROUTES.PRODUCTS}/${value}`);
    };

    return (
        <>
            <StyledAppBar sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {!isDesktop ? (
                        <StyledIconButton aria-label="open drawer" edge="start">
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

                        <IconButton
                            onClick={(event) => void handleModalOpen(event)}
                            sx={{ p: 0 }}
                        >
                            <Avatar
                                src={userResponse.data?.userImage}
                                alt="profile image"
                                sx={{
                                    height: '100%',
                                    width: theme.typography.pxToRem(32),
                                }}
                            />
                        </IconButton>
                    </ToolbarBox>
                </Toolbar>
                <Divider />
            </StyledAppBar>

            {!userResponse.data ? (
                <ModalSkeleton
                    anchorEl={anchorEl}
                    handleModalClose={handleModalClose}
                />
            ) : (
                <CustomModal
                    anchorEl={anchorEl}
                    handleModalClose={handleModalClose}
                    userName={userResponse.data.userName}
                    userEmail={userResponse.data.userEmail}
                    userImage={userResponse.data.userImage}
                    buttonText="Manage Profile"
                    onButtonClick={() => {
                        void navigate(ROUTES.MANAGE_PROFILE);
                        void handleModalClose();
                    }}
                />
            )}
        </>
    );
};
