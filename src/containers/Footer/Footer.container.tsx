import { IconButton, Stack, useTheme } from '@mui/material';

import { Typography } from '@components';

import { footerConfig } from './Footer.config';
import { FooterStack } from './Footer.styles';

export const Footer = () => {
    const theme = useTheme();

    return (
        <FooterStack>
            <Typography variant="body1" color="text.secondary">
                {footerConfig.description}
            </Typography>

            <Stack flexDirection="row" gap={theme.spacing(6)}>
                {footerConfig.links.map((item, index) => (
                    <IconButton
                        aria-label={item.ariaLabel}
                        component="a"
                        href={item.url}
                        rel="noreferrer noopener"
                        key={index}
                        target="_blank"
                        sx={{ p: 0 }}
                        color="inherit"
                    >
                        <item.iconURL />
                    </IconButton>
                ))}
            </Stack>
        </FooterStack>
    );
};
