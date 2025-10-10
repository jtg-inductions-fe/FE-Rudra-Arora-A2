export type ModalProps = {
    anchorEl: HTMLElement | null;
    handleModalClose: () => void;
    userName: string;
    userEmail: string;
    userImage: string;
    buttonText: string;
    buttonRoute: string;
};
