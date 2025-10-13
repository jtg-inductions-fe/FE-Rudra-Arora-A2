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
    StyledIconButton,
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

    const handleSearchChange = (label: string) => {
        const value = label.split(' ').join('-').toLowerCase();
        void navigate(`${ROUTES.PRODUCTS}/${value}`);
    };

    return (
        <>
            <StyledAppBar sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <StyledIconButton aria-label="open drawer" edge="start">
                        <MenuOpenIcon
                            sx={{ fontSize: theme.typography.pxToRem(32) }}
                        />
                    </StyledIconButton>

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
                            handleSearchChange={handleSearchChange}
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
                                src={UserData.user1.userImage}
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
                userName={UserData.user1.userName}
                userEmail={UserData.user1.userEmail}
                userImage={UserData.user1.userImage}
                text="Manage Profile"
            />
        </>
    );
};
