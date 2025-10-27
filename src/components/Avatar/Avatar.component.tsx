import { MouseEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Avatar as MuiAvatar, IconButton, useTheme } from '@mui/material';

import { AvatarProps } from './Avatar.types';
import { CustomModal } from '../Modal';

export const AvatarComponent = ({
    data,
    buttonText,
    buttonRoute,
}: AvatarProps) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleModalOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleModalClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                onClick={(event) => void handleModalOpen(event)}
                sx={{ p: 0 }}
            >
                <MuiAvatar
                    src={data.userImage}
                    alt="profile image"
                    sx={{
                        height: '100%',
                        width: theme.typography.pxToRem(32),
                    }}
                />
            </IconButton>

            <CustomModal
                anchorEl={anchorEl}
                handleModalClose={handleModalClose}
                userName={data.userName}
                userEmail={data.userEmail}
                userImage={data.userImage}
                buttonText={buttonText}
                onButtonClick={() => {
                    void navigate(buttonRoute);
                    handleModalClose();
                }}
            />
        </>
    );
};
