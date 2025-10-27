export type RootContextType = {
    mobileSidebarOpen: boolean;
    isSidebarClosing: boolean;
    handleDrawerClose: () => void;
    handleDrawerToggle: () => void;
    handleDrawerTransitionEnd: () => void;
};
