import ContactPageIcon from '@mui/icons-material/ContactPage';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { SidebarType } from './Sidebar.types';

export const navConfig: SidebarType[] = [
    {
        title: 'Overview',
        icon: PieChartIcon,
        route: '/overview',
    },
    {
        title: 'Pages',
        icon: ContactPageIcon,
        route: '/pages',
        children: [
            { title: 'Overview', route: '/pages/overview' },
            { title: 'Docs', route: '/pages/docs' },
            { title: 'Components', route: '/pages/components' },
            { title: 'Help', route: '/pages/help' },
        ],
    },
    {
        title: 'Sales',
        icon: ShoppingBagIcon,
        route: '/sales',
        children: [
            { title: 'Product List', route: '/product-list' },
            { title: 'Billing', route: '/billing' },
            { title: 'Invoice', route: '/invoice' },
        ],
    },
    {
        title: 'Messages',
        icon: MoveToInboxSharpIcon,
        route: '/messages',
    },
    {
        title: 'Authentication',
        icon: LockIcon,
        route: '/authentication',
        children: [
            { title: 'Login', route: '/login' },
            { title: 'Sign Up', route: '/signup' },
        ],
    },
];
