import { SvgIconProps } from '@mui/material';

export type SidebarProps = {
    handleDrawerClose: () => void;
    handleDrawerTransitionEnd: () => void;
    mobileSidebarOpen: boolean;
};

export type SidebarMenuType = {
    title: string;
    icon?: React.ComponentType<SvgIconProps>;
    route?: string;
    children?: SidebarMenuType[];
    count?: number;
};
