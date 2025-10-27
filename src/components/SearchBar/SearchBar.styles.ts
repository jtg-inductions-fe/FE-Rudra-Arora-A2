import { Autocomplete, styled } from '@mui/material';

export const StyledSearchBar = styled(Autocomplete)(
    ({
        theme: {
            typography: { pxToRem },
            palette,
            shadows,
            mixins,
        },
    }) => ({
        width: pxToRem(400),
        ...mixins.hideVerticalScrollbar(),
        borderRadius: pxToRem(16),
        boxShadow: shadows[6],
        '& .MuiOutlinedInput-root': {
            height: pxToRem(45),
            borderRadius: pxToRem(16),
            backgroundColor: palette.background.default,
        },
    }),
);
