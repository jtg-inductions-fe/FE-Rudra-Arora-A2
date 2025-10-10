import React, { useState } from 'react';

import { SearchBar } from 'components/SearchBar';
import { useNavigate } from 'react-router-dom';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Box, IconButton, Toolbar, useTheme } from '@mui/material';

import logo from '@assets/images/Logo.webp';
import { CustomModal } from '@components';
import { ProductsData, userData } from '@data';

import { StyledAppBar, StyledBox, StyledImage } from './Header.style';

import profileImage from '/images/profile-picture.webp';

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
            <StyledAppBar>
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

                    <StyledBox>
                        <IconButton
                            onClick={() => void navigate('/')}
                            sx={{ p: 0 }}
                        >
                            <StyledImage src={logo} alt="main logo" />
                        </IconButton>
                        <SearchBar
                            Data={ProductsData}
                            optionKey="productName"
                        />
                    </StyledBox>

                    <Box
                        sx={{
                            mt: 2,
                            mr: 2,
                            display: 'flex',
                            gap: theme.typography.pxToRem(8),
                            height: theme.typography.pxToRem(32),
                            [theme.breakpoints.up('md')]: {
                                gap: theme.typography.pxToRem(12),
                            },
                        }}
                    >
                        <IconButton
                            onClick={() => {
                                void navigate('/notifications');
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
                            onClick={(e) => void handleModalOpen(e)}
                            sx={{ p: 0 }}
                        >
                            <Avatar
                                src={profileImage}
                                alt="profile image"
                                sx={{ height: '100%', width: '32px' }}
                            />
                        </IconButton>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            <CustomModal
                anchorEl={anchorEl}
                handleModalClose={handleModalClose}
                userName={userData[0].userName}
                userEmail={userData[0].userEmail}
                userImage={userData[0].userImage}
                buttonText="Manage Profile"
                buttonRoute="/manage-profile"
            />
        </>
    );
};
