import notFoundImage from '@assets/images/404.webp';
import { ErrorDisplay } from '@components';
import { ROUTES } from '@routes';

import { NotFoundConstants } from './NotFound.constants';

export const NotFound = () => (
    <ErrorDisplay
        image={notFoundImage}
        title={NotFoundConstants.TITLE}
        body={NotFoundConstants.BODY}
        buttonText={NotFoundConstants.BUTTON_TEXT}
        to={ROUTES.ROOT}
    />
);
