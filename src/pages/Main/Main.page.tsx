import { Stack, useTheme } from '@mui/material';

import { Hero, Sales } from '@containers';

import { Customer } from './Customer';
import { Products } from './Products';

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

            <Stack
                gap={theme.spacing(4)}
                sx={{
                    [theme.breakpoints.up('md')]: {
                        flexDirection: 'row',
                    },
                }}
            >
                <Customer />
                <Products />
            </Stack>
        </Stack>
    );
};
