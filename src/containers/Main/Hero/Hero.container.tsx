import { useMediaQuery, useTheme } from '@mui/material';

import { QuiltedImageList } from '@components';
import { HeroData } from '@data';

export const Hero = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const visibleItems = isDesktop ? HeroData : HeroData.slice(0, -1);

    return <QuiltedImageList Data={visibleItems} />;
};
