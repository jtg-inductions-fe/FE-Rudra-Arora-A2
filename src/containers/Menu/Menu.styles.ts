import { IconButton, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(
    ({ theme: { palette, spacing } }) => ({
        marginLeft: spacing(0),
        marginTop: spacing(1),
        color: palette.text.primary,
    }),
);
