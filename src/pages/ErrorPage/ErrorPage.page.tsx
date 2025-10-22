import errorBoundaryImage from '@assets/images/error-page-bg.webp';
import { ErrorDisplay } from '@components';

import { ErrorPageConstants } from './ErrorPage.constants';

export const ErrorPage = () => (
    <ErrorDisplay
        image={errorBoundaryImage}
        title={ErrorPageConstants.TITLE}
        body={ErrorPageConstants.BODY}
    />
);
