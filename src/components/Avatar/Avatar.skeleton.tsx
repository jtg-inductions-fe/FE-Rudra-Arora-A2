import { Skeleton, useTheme } from '@mui/material';

export const AvatarSkeleton = () => {
    const theme = useTheme();

    return (
        <Skeleton
            variant="circular"
            sx={{
                height: '100%',
                width: theme.typography.pxToRem(32),
            }}
        />
    );
};
