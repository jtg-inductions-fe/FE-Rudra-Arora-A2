import {
    Avatar,
    Box,
    Button,
    Popover,
    Typography,
    useTheme,
} from '@mui/material';

import { StyledPaper } from './Modal.styles';
import type { ModalProps } from './Modal.types';

export const CustomModal = ({
    anchorEl,
    handleModalClose,
    userName,
    userEmail,
    userImage,
    buttonText,
    onButtonClick,
}: ModalProps) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const theme = useTheme();

    return (
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
                    component: StyledPaper,
                },
            }}
        >
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

                {buttonText && (
                    <Button variant="contained" onClick={onButtonClick}>
                        {buttonText}
                    </Button>
                )}
            </Box>
        </Popover>
    );
};
