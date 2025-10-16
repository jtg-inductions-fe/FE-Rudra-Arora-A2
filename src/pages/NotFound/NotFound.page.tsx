import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

import notFoundImage from '@assets/images/404.webp';
import { ErrorPage } from '@components';
import { ROUTES } from '@routes';

export const NotFound = () => (
    <Box sx={{ mt: 16 }}>
        <ErrorPage
            image={notFoundImage}
            title="Page not found"
            body="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
            buttonText="Go Home"
            buttonComponent={Link}
            to={ROUTES.ROOT}
        />
    </Box>
);
