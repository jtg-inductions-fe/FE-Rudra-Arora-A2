import { Stack, useTheme } from '@mui/material';

import { Hero } from '@containers';

import { Sales } from './Sales';
import { QuiltedImageList } from '@components';
import { HeroData } from '@data';

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
            <QuiltedImageList Data={HeroData} />
            <Sales />
        </Stack>
    );
};
