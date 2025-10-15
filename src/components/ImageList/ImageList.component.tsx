import { ImageListItem, useMediaQuery, useTheme } from '@mui/material';

import { StyledImageList } from './ImageList.styles';
import { ImageListProps } from './ImageList.types';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const QuiltedImageList = ({ Data }: ImageListProps) => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const visibleItems = isDesktop ? Data : Data.slice(0, -1);

    return (
        <StyledImageList
            variant="quilted"
            cols={4}
            rowHeight={!isDesktop ? 115 : 130}
            gap={isDesktop ? 40 : 20}
        >
            {visibleItems.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={!isDesktop ? item.cols_sm || 1 : item.cols_lg || 1}
                    rows={!isDesktop ? item.rows_sm || 1 : item.rows_lg || 1}
                >
                    <img
                        {...srcset(item.img, 160)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </StyledImageList>
    );
};
