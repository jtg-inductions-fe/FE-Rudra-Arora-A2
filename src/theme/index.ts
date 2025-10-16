import { createTheme } from '@mui/material/styles';
import shadows from '@mui/material/styles/shadows';

/* Customized MUI components themes */
import { components } from './Components';
import { SCALING_FACTOR } from './Constant';
/* Customized foundation themes */
import { breakpoints, mixins, palette, typography } from './Foundations';

/* 
Initialize the theme with base theme elements (excluding typography styles and spacing to ensure the theme has correct breakpoints and pxToRem function set.)
*/
let theme = createTheme({
    palette,
    breakpoints,
    mixins,
    components,
    typography: {
        fontFamily: 'Inter',
        ...typography.typographyUtil,
    },
    spacing: (factor: number) =>
        theme.typography.pxToRem(factor * SCALING_FACTOR),
});

/* Extend the base theme with additional configurations */
theme = createTheme(theme, {
    typography: {
        ...typography.typographyStyle(theme),
    },
    components: {
        ...theme.components,
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: theme.typography.pxToRem(12),
                    textTransform: 'none',
                    padding: theme.spacing(2, 4),
                    boxShadow: 'none',
                },
            },
        },
    },
    shadows: [
        'none',
        '0px 1px 3px rgba(0,0,0,0.10), 0px 1px 2px rgba(0,0,0,0.06)',
        ...shadows,
    ],
});

export { theme };
