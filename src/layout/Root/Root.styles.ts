import { BoxProps, Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)<BoxProps>(
    ({ theme: { breakpoints, spacing, palette } }) => ({
        flexGrow: 1,
        overflow: 'auto',
        margin: spacing(20, 4, 7, 5),
        backgroundColor: palette.background.default,
        width: '100%',

        [breakpoints.up('md')]: {
            margin: spacing(20, 4, 4, 66),
        },
    }),
);
