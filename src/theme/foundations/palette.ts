import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    // TODO: Add necessary colors here
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    secondary: {
        main: COLORS.SECONDARY,
    },
    error: {
        main: COLORS.ERROR.BACKGROUND,
        contrastText: COLORS.ERROR.TEXT,
    },
    info: {
        main: COLORS.INFO.BACKGROUND,
        contrastText: COLORS.INFO.TEXT,
    },
    success: {
        main: COLORS.SUCCESS.BACKGROUND,
        contrastText: COLORS.SUCCESS.TEXT,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
    background: {
        default: COLORS.BACKGROUND.PRIMARY,
    },
    action: {
        hover: COLORS.BACKGROUND.SHADOW,
        active: COLORS.BACKGROUND.SIDEBAR_ACTIVE,
    },
};
