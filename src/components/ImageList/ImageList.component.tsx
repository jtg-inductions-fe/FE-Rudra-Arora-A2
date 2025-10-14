import { useMediaQuery, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import hero_image_1 from '@assets/images/hero-image-1.webp';
import hero_image_2 from '@assets/images/hero-image-2.webp';
import hero_image_3 from '@assets/images/hero-image-3.webp';
import hero_image_4 from '@assets/images/hero-image-4.webp';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const QuiltedImageList = () => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    // console.log(isDesktop)

    return (
        <ImageList
            sx={{
                width: '100%',
                height: 529,
                m: 0,
                [theme.breakpoints.up('sm')]: { height: 310 },
            }}
            variant="quilted"
            cols={4}
            rowHeight={!isDesktop ? 130 : 155}
        >
            {itemData.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={!isDesktop ? item.cols_sm || 0 : item.cols_lg || 1}
                    rows={!isDesktop ? item.rows_sm || 1 : item.rows_lg || 1}
                >
                    <img
                        {...srcset(item.img, 150)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

const itemData = [
    {
        img: hero_image_1,
        title: 'Hats',
        rows_sm: 2,
        cols_sm: 4,
    },
    {
        img: hero_image_2,
        title: 'Honey',
        cols_sm: 4,
        rows_sm: 1,
    },
    {
        img: hero_image_3,
        title: 'Basketball',
        rows_lg: 2,
        cols_lg: 2,
        cols_sm: 4,
        rows_sm: 1,
    },
    {
        img: hero_image_4,
        title: 'Fern',
        cols_lg: 2,
    },
];
