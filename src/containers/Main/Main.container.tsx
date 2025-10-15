import { Box } from '@mui/material';

import { QuiltedImageList } from '@components';
import { HeroData } from '@data';

export const Main = () => (
    <Box>
        <QuiltedImageList Data={HeroData} />
    </Box>
);
