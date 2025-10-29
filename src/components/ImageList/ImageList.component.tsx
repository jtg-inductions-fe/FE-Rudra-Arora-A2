import { ImageListItem, useMediaQuery, useTheme } from '@mui/material';

import { StyledImageList } from './ImageList.styles';
import { ImageListProps } from './ImageList.types';

export const QuiltedImageList = ({ data, columnsNumber }: ImageListProps) => {
    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <StyledImageList
            variant="quilted"
            cols={columnsNumber}
            rowHeight={!isDesktop ? 115 : 130}
            gap={isDesktop ? 40 : 20}
        >
            {data.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={!isDesktop ? item.cols_sm || 1 : item.cols_lg || 1}
                    rows={!isDesktop ? item.rows_sm || 1 : item.rows_lg || 1}
                >
                    <img src={item.img} alt={item.title} />
                </ImageListItem>
            ))}
        </StyledImageList>
    );
};
