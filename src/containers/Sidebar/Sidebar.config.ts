import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportIcon from '@mui/icons-material/Support';

import { ROUTES } from '@routes';

import { SidebarMenuType } from './Sidebar.types';

export const navConfig: SidebarMenuType[] = [
    {
        title: 'Overview',
        icon: PieChartIcon,
        route: ROUTES.OVERVIEW,
    },
    {
        title: 'Pages',
        icon: ContactPageIcon,
        children: [
            { title: 'Overview', route: `/pages${ROUTES.OVERVIEW}` },
            { title: 'Docs', route: `/pages${ROUTES.DOCS}` },
            { title: 'Components', route: `/pages${ROUTES.COMPONENTS}` },
            { title: 'Help', route: `/pages${ROUTES.HELP}` },
        ],
    },
    {
        title: 'Sales',
        icon: ShoppingBagIcon,
        children: [
            { title: 'Product List', route: `/sales${ROUTES.PRODUCT_LIST}` },
            { title: 'Billing', route: `/sales${ROUTES.BILLING}` },
            { title: 'Invoice', route: `/sales${ROUTES.INVOICE}` },
        ],
    },
    {
        title: 'Messages',
        icon: MoveToInboxSharpIcon,
        route: ROUTES.MESSAGES,
        count: 1,
    },
    {
        title: 'Authentication',
        icon: LockIcon,
        children: [
            { title: 'Login', route: `/auth${ROUTES.LOGIN}` },
            { title: 'Sign Up', route: `/auth${ROUTES.SIGN_UP}` },
        ],
    },
    {
        title: 'Docs',
        icon: ContentPasteIcon,
        route: ROUTES.DOCS,
    },
    {
        title: 'Components',
        icon: CollectionsBookmarkIcon,
        route: ROUTES.COMPONENTS,
    },
    {
        title: 'Help',
        icon: SupportIcon,
        route: ROUTES.HELP,
    },
];
