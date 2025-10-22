import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import { StyledBox, StyledImage } from './Error.styles';
import { ErrorDisplayProps } from './Error.types';

export const ErrorDisplay = ({
    image,
    title,
    body,
    buttonText,
    to,
}: ErrorDisplayProps) => (
    <StyledBox>
        <StyledImage src={image} alt={title} />

        <Typography variant="h1">{title}</Typography>

        <Typography
            variant="body1"
            color="textSecondary"
            sx={{ maxWidth: '80%' }}
        >
            {body}
        </Typography>

        {buttonText && (
            <Button variant="contained" component={Link} to={to}>
                {buttonText}
            </Button>
        )}
    </StyledBox>
);
