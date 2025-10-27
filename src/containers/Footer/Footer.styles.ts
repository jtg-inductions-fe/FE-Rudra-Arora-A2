import { BoxProps, Stack, styled } from '@mui/material';

export const FooterStack = styled(Stack)<BoxProps>(({ theme }) => ({
    ...theme.mixins.SectionContainerStyles(theme.spacing(12, 8, 6)),
    marginBottom: theme.spacing(1),
    gap: theme.spacing(8),
    justifyContent: 'space-between',

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: theme.spacing(12, 8),
    },
}));
