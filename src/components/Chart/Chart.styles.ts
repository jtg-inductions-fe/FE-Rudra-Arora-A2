import { Box, styled } from '@mui/material';

export const YAxisBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.typography.pxToRem(20),
    left: theme.typography.pxToRem(30),
    right: theme.typography.pxToRem(10),
    height: theme.typography.pxToRem(4),
    backgroundColor: theme.palette.divider,
}));

export const XAxisBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.typography.pxToRem(20),
    left: theme.typography.pxToRem(30),
    top: theme.typography.pxToRem(10),
    width: theme.typography.pxToRem(4),
    backgroundColor: theme.palette.divider,
}));

export const LineSkeleton = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: theme.typography.pxToRem(20),
    left: theme.typography.pxToRem(30),
    width: '80%',
    height: theme.typography.pxToRem(2),
    backgroundColor: theme.palette.divider,
    transform: 'rotate(-30deg)',
    transformOrigin: 'left bottom',
}));
