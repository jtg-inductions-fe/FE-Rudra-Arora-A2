import { useMediaQuery, useTheme } from '@mui/material';

import { QuiltedImageList } from '@components';

import { heroConfig } from './Hero.config';

export const Hero = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const visibleItems = isDesktop ? heroConfig : heroConfig.slice(0, -1);

    return <QuiltedImageList data={visibleItems} />;
};
