import { Link } from 'react-router-dom';

import {
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { footerConfig } from './Footer.config';

export const Footer = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack
            sx={{
                ...theme.mixins.BoxStyle(theme.typography.pxToRem(48)),
                mb: theme.typography.pxToRem(2),
            }}
            gap={theme.spacing(8)}
            flexDirection={isDesktop ? 'row' : 'column'}
            justifyContent="space-between"
        >
            <Typography variant="body1" color="text.secondary">
                {footerConfig.description}
            </Typography>

            <Stack flexDirection="row" gap={theme.spacing(6)}>
                {footerConfig.links.map((item, index) => (
                    <IconButton
                        aria-label={item.ariaLabel}
                        component={Link}
                        to={item.url}
                        rel="noreferrer"
                        key={index}
                        sx={{ p: 0 }}
                        color="inherit"
                    >
                        {<item.iconURL />}
                    </IconButton>
                ))}
            </Stack>
        </Stack>
    );
};
