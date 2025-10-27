import { Box, useMediaQuery, useTheme } from '@mui/material';

import { QuiltedImageList } from '@components';

import { heroConfig } from './Hero.config';
import { HERO_CONSTANTS } from './hero.constants';

export const Hero = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const visibleItems = isDesktop ? heroConfig : heroConfig.slice(0, -1);

    return (
        <Box component="section" aria-label="Hero Section">
            <QuiltedImageList
                data={visibleItems}
                columnsNumber={HERO_CONSTANTS.COLUMNS_NUMBER}
            />
        </Box>
    );
};
