import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import errorBoundaryImage from '@assets/images/error-page-bg.webp';
import { ErrorPage } from '@components';
import { ROUTES } from '@routes';

export const ErrorBoundary = () => (
    <Box>
        <ErrorPage
            image={errorBoundaryImage}
            title="Something has gone seriously wrong"
            body="It’s always time for a coffee break We should be back by the time you finish your coffee."
            buttonText="Go Home"
            component={Link}
            to={ROUTES.ROOT}
        />
    </Box>
);
