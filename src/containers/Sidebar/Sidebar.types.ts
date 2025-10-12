import { SvgIconProps } from '@mui/material';

export type SidebarProps = {
    handleDrawerClose: () => void;
    handleDrawerTransitionEnd: () => void;
    mobileSidebarOpen: boolean;
};

type SidebarMenuType = {
    title: string;
    route: string;
};

export type SidebarType = {
    title: string;
    icon: React.ComponentType<SvgIconProps>;
    route: string;
    children?: SidebarMenuType[];
};
