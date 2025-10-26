import { Box, CircularProgress, useTheme } from '@mui/material';

export const Loader = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                ...theme.mixins.flexCenter(),
            }}
        >
            <CircularProgress color="primary" size={'10%'} />
        </Box>
    );
};
