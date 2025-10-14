export type ModalProps = {
    anchorEl: HTMLElement | null;
    handleModalClose: () => void;
    userName: string;
    userEmail: string;
    userImage: string;
    text: string;
    component?: React.ElementType;
    onClick: () => void;
};
