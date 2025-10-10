import { Box, CircularProgress, useTheme } from '@mui/material';

export const Loader = () => {
    const theme = useTheme();

    return (
        <Box sx={{ width: theme.typography.pxToRem(100) }}>
            <CircularProgress color="primary" size={'100%'} />
        </Box>
    );
};
