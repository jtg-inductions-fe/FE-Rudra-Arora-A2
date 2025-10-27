import { Box, Skeleton, Stack, useTheme } from '@mui/material';

export const InfoListSkeleton = () => {
    const theme = useTheme();
    const lists = Array.from({ length: 6 });

    return (
        <Stack spacing={theme.spacing(2)} width="100%">
            {lists.map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        ...theme.mixins.flex('space-between', 'center'),
                    }}
                >
                    <Stack spacing={1}>
                        <Skeleton
                            width={theme.typography.pxToRem(60)}
                            variant="text"
                            sx={{ borderRadius: 1 }}
                        />
                        <Skeleton
                            width={theme.typography.pxToRem(100)}
                            variant="text"
                            sx={{ borderRadius: 1 }}
                        />
                    </Stack>

                    <Skeleton
                        width={theme.typography.pxToRem(60)}
                        variant="text"
                        sx={{ borderRadius: 1 }}
                    />
                </Box>
            ))}
        </Stack>
    );
};
