import { SvgIconComponent } from '@mui/icons-material';

export type SidebarProps = {
    handleDrawerClose: () => void;
    handleDrawerTransitionEnd: () => void;
    mobileSidebarOpen: boolean;
};

export type SidebarMenuType = {
    title: string;
    icon?: SvgIconComponent;
    route?: string;
    children?: SidebarMenuType[];
    count?: number;
};
