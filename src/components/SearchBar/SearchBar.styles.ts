import { Autocomplete, styled } from '@mui/material';

export const StyledSearchBar = styled(Autocomplete)(
    ({
        theme: {
            typography: { pxToRem },
            palette,
            spacing,
            shadows,
            mixins,
        },
    }) => ({
        width: pxToRem(400),
        ...mixins.hideVerticalScrollbar(),
        '& .MuiOutlinedInput-root': {
            border: `${pxToRem(1)} solid ${palette.divider}`,
            height: pxToRem(45),
            borderRadius: pxToRem(16),
            backgroundColor: palette.background.default,
            boxShadow: shadows[5],
            paddingRight: spacing(1),
        },
        '& input': {
            paddingLeft: spacing(1),
        },
    }),
);
