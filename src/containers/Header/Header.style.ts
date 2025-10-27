import { AppBar, Box, styled } from '@mui/material';

import { HeaderConstants } from './Header.constants';

export const StyledAppBar = styled(AppBar)(
    ({ theme: { palette, typography, breakpoints } }) => ({
        width: '100%',
        position: 'fixed',
        background: palette.secondary.main,
        boxShadow: 'none',
        height: typography.pxToRem(HeaderConstants.Header_Height_sm),

        [breakpoints.up('md')]: {
            height: typography.pxToRem(HeaderConstants.Header_Height_lg),
        },
    }),
);

export const HeaderBox = styled(Box)(({ theme: { spacing, mixins } }) => ({
    ...mixins.flex('flex-start', 'stretch', spacing(8)),
    marginLeft: spacing(2),
    marginTop: spacing(1),
}));

export const ToolbarBox = styled(Box)(
    ({ theme: { spacing, breakpoints, mixins } }) => ({
        marginTop: spacing(2),
        marginRight: spacing(2),
        ...mixins.flex('flex-start', 'stretch', spacing(2)),
        height: spacing(8),
        [breakpoints.up('md')]: {
            gap: spacing(3),
        },
    }),
);
