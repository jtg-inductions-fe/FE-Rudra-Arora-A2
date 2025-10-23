import { Link } from 'react-router-dom';

import { SvgIconComponent } from '@mui/icons-material';
import { ListItemButtonProps } from '@mui/material';

export type MenuItemType = {
    title: string;
    icon?: SvgIconComponent;
    route?: string;
    children?: MenuItemType[];
    count?: number;
};

export type MenuProps = {
    config: MenuItemType[][];
};

export type RecursiveMenuProps = {
    items: MenuProps['config'][number];
    prefix: string;
};

export type StyledListItemButtonProps = ListItemButtonProps & {
    component?: typeof Link | 'button';
    to?: string;
};
