import { ImageList, styled } from '@mui/material';

export const StyledImageList = styled(ImageList)(
    ({ theme: { typography, breakpoints, mixins } }) => ({
        width: '100%',
        height: typography.pxToRem(530),
        margin: 0,
        ...mixins.hideVerticalScrollbar(),
        [breakpoints.up('md')]: { height: typography.pxToRem(470) },
    }),
);
