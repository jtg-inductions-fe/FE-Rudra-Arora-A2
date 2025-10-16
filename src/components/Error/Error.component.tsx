import { Box, Button, Typography } from '@mui/material';

import { StyledBox } from './Error.styles';
import { ErrorProps } from './Error.types';

export const ErrorPage = ({
    image,
    title,
    body,
    buttonText,
    component,
    to,
}: ErrorProps) => (
    <>
        <StyledBox>
            <Box
                component="img"
                src={image}
                sx={{ maxWidth: '100%', pointerEvents: 'none' }}
            ></Box>

            <Typography variant="h1">{title}</Typography>

            <Typography
                variant="body1"
                color="textSecondary"
                sx={{ maxWidth: '80%' }}
            >
                {body}
            </Typography>

            <Button variant="contained" component={component} to={to}>
                {buttonText}
            </Button>
        </StyledBox>
    </>
);
