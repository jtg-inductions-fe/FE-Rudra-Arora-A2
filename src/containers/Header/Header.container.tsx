import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Divider, IconButton, Toolbar, useTheme } from '@mui/material';

import logo from '@assets/images/Logo.webp';
import { SearchBar } from '@components';
import { CustomModal } from '@components';
import { ProductsData, UserData } from '@data';
import { ROUTES } from '@routes';

import {
    HeaderBox,
    StyledAppBar,
    StyledImage,
    ToolbarBox,
} from './Header.style';

export const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleModalOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleModalClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledAppBar sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            ml: 0,
                            mt: 1,
                            display: { md: 'none' },
                            color: theme.palette.text.primary,
                        }}
                    >
                        <MenuOpenIcon
                            sx={{ fontSize: theme.typography.pxToRem(32) }}
                        />
                    </IconButton>

                    <HeaderBox>
                        <IconButton
                            onClick={() => void navigate('/')}
                            sx={{ p: 0 }}
                        >
                            <StyledImage src={logo} alt="main logo" />
                        </IconButton>
                        <SearchBar
                            Data={ProductsData}
                            optionKey="productName"
                            mainRoute={ROUTES.PRODUCTS}
                        />
                    </HeaderBox>

                    <ToolbarBox>
                        <IconButton
                            onClick={() => {
                                void navigate(ROUTES.NOTIFICATIONS);
                            }}
                            sx={{
                                color: theme.palette.common.black,
                                boxShadow: theme.shadows[4],
                                p: 1,
                            }}
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
                                src={UserData[0].userImage}
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
            <CustomModal
                anchorEl={anchorEl}
                handleModalClose={handleModalClose}
                userName={UserData[0].userName}
                userEmail={UserData[0].userEmail}
                userImage={UserData[0].userImage}
                Text="Manage Profile"
            />
        </>
    );
};
