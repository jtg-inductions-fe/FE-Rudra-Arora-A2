import { Link } from 'react-router-dom';

import errorBoundaryImage from '@assets/images/error-page-bg.webp';
import { ErrorPage } from '@components';
import { ROUTES } from '@routes';

export const ErrorBoundary = () => (
    <ErrorPage
        image={errorBoundaryImage}
        title="Something has gone seriously wrong"
        body="It’s always time for a coffee break We should be back by the time you finish your coffee."
        buttonText="Go Home"
        buttonComponent={Link}
        to={ROUTES.ROOT}
    />
);
