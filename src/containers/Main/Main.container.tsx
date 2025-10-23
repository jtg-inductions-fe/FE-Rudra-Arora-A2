import { Stack, useTheme } from '@mui/material';

import { Hero } from './Hero';

export const Main = () => {
    const theme = useTheme();

    return (
        <Stack
            gap={theme.spacing(4)}
            sx={{
                [theme.breakpoints.up('lg')]: {
                    maxWidth: theme.typography.pxToRem(1320),
                    margin: 'auto',
                },
            }}
        >
            <Hero />
        </Stack>
    );
};
