import { ReusableButton } from 'components/Button';

import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Box, IconButton, Popover, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

import type { ModalProps } from './Modal.types';

export const CustomModal = ({
    anchorEl,
    handleModalClose,
    userName,
    userEmail,
    userImage,
    buttonText,
    buttonRoute,
}: ModalProps) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const theme = useTheme();

    return (
        <div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleModalClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: theme.typography.pxToRem(16),
                            width: theme.typography.pxToRem(280),

                            [theme.breakpoints.up('md')]: {
                                width: theme.typography.pxToRem(320),
                            },

                            [theme.breakpoints.up('lg')]: {
                                width: theme.typography.pxToRem(400),
                            },
                        },
                    },
                }}
            >
                <IconButton
                    onClick={handleModalClose}
                    sx={{ position: 'absolute' }}
                >
                    <CloseIcon />
                </IconButton>
                <Box
                    sx={{
                        ...theme.mixins.flexCenter('column'),
                        padding: theme.spacing(5),
                        gap: theme.spacing(4),
                    }}
                >
                    <Avatar src={userImage} alt="user image" />
                    <Typography variant="h2">{userName}</Typography>
                    <Typography variant="subtitle1">{userEmail}</Typography>

                    <ReusableButton
                        buttonText={buttonText}
                        buttonRoute={buttonRoute}
                    />
                </Box>
            </Popover>
        </div>
    );
};
