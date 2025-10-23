import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxSharpIcon from '@mui/icons-material/MoveToInboxSharp';
import PieChartIcon from '@mui/icons-material/PieChart';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupportIcon from '@mui/icons-material/Support';
import TuneIcon from '@mui/icons-material/Tune';

import { MenuItemType } from '@components';
import { ROUTES } from '@routes';

export const sidebarConfig: {
    navHeader: MenuItemType[][];
    navFooter: MenuItemType[];
} = {
    navHeader: [
        [
            {
                title: 'Overview',
                icon: PieChartIcon,
                route: ROUTES.OVERVIEW,
            },
            {
                title: 'Pages',
                icon: ContactPageIcon,
                children: [
                    {
                        title: 'Overview',
                        route: ROUTES.PAGES,
                    },
                    { title: 'Docs', route: ROUTES.PAGES },
                    {
                        title: 'Components',
                        route: ROUTES.PAGES,
                    },
                    { title: 'Help', route: ROUTES.PAGES },
                ],
            },
            {
                title: 'Sales',
                icon: ShoppingBagIcon,
                children: [
                    {
                        title: 'Product List',
                        route: ROUTES.SALES,
                    },
                    {
                        title: 'Billing',
                        route: ROUTES.SALES,
                    },
                    {
                        title: 'Invoice',
                        route: ROUTES.SALES,
                    },
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
                    { title: 'Login', route: ROUTES.AUTH },
                    {
                        title: 'Sign Up',
                        route: ROUTES.AUTH,
                    },
                ],
            },
        ],

        [
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
        ],
    ],

    navFooter: [
        {
            title: 'Tune',
            route: ROUTES.TUNE,
            icon: TuneIcon,
        },
        {
            title: 'Explore',
            route: ROUTES.PUBLIC,
            icon: PublicIcon,
        },
        {
            title: 'Settings',
            route: ROUTES.SETTINGS,
            icon: SettingsIcon,
        },
    ],
};
