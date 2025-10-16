import { ButtonProps } from '@mui/material';

export type ModalProps = {
    anchorEl: HTMLElement | null;
    handleModalClose: () => void;
    userName: string;
    userEmail: string;
    userImage: string;
    buttonText: string;
    onButtonClick: ButtonProps['onClick'];
};

export type ModalSkeletonProps = Pick<
    ModalProps,
    'anchorEl' | 'handleModalClose'
>;
