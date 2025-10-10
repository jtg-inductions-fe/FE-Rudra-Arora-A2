import { createBrowserRouter } from 'react-router-dom';

import { Main } from '@containers';
import { Root } from '@layout';
import { ErrorBoundary, NotFound } from '@pages';

import { ROUTES } from './Routes.constant';

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Main />,
            },

            { path: ROUTES.MESSAGES, element: <NotFound /> },
            { path: ROUTES.LOGIN, element: <NotFound /> },
            { path: ROUTES.SIGN_UP, element: <NotFound /> },
            { path: ROUTES.DOCS, element: <NotFound /> },
            { path: ROUTES.COMPONENTS, element: <NotFound /> },
            { path: ROUTES.HELP, element: <NotFound /> },
            { path: ROUTES.NOTIFICATIONS, element: <NotFound /> },
            { path: ROUTES.PRODUCT_LIST, element: <NotFound /> },
            { path: ROUTES.BILLING, element: <NotFound /> },
            { path: ROUTES.INVOICE, element: <NotFound /> },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
