import { lazy, Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { Loader } from '@components';
import { Root } from '@layout';
import { ErrorPage, NotFound } from '@pages';

import { ROUTES } from './Routes.constant';

const Main = lazy(() => import('../pages/Main/Main.page'));

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Main />
                    </Suspense>
                ),
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
