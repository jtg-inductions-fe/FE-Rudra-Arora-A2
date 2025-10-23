import { Stack, useTheme } from '@mui/material';

import { Hero } from '@containers';

import { Sales } from './Sales';

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
            <Sales />
        </Stack>
    );
};
