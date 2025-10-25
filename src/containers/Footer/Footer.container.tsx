import { Link } from 'react-router-dom';

import { IconButton, Stack, useTheme } from '@mui/material';

import { Typography } from '@components';

import { footerConfig } from './Footer.config';
import { FooterStack } from './Footer.styles';

export const Footer = () => {
    const theme = useTheme();

    return (
        <FooterStack>
            <Typography variant="body1" color="text.secondary" linesToClamp={2}>
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
        </FooterStack>
    );
};
