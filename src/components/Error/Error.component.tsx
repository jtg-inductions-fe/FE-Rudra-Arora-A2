import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import { StyledBox, StyledImage } from './Error.styles';
import { ErrorDisplayProps } from './Error.types';
import { Typography } from '../Typography';

export const ErrorDisplay = ({
    image,
    title,
    body,
    buttonText,
    to,
}: ErrorDisplayProps) => (
    <StyledBox>
        <StyledImage src={image} alt={title} />

        <Typography variant="h1" linesToClamp={1}>
            {title}
        </Typography>

        <Typography variant="body1" color="textSecondary">
            {body}
        </Typography>

        {buttonText && (
            <Button variant="contained" component={Link} to={to}>
                {buttonText}
            </Button>
        )}
    </StyledBox>
);
