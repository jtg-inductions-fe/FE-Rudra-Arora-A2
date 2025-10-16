import { Popover, Skeleton, Stack, useTheme } from '@mui/material';

import { StyledPaper } from './Modal.styles';
import type { ModalSkeletonProps } from './Modal.types';

export const ModalSkeleton = ({
    anchorEl,
    handleModalClose,
}: ModalSkeletonProps) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const theme = useTheme();

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleModalClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            slotProps={{
                paper: {
                    component: StyledPaper,
                },
            }}
        >
            <Stack
                spacing={0}
                sx={{
                    alignItems: 'center',
                    padding: theme.spacing(5),
                    gap: theme.spacing(4),
                }}
            >
                <Skeleton
                    variant="circular"
                    width={theme.typography.pxToRem(40)}
                    height={theme.typography.pxToRem(40)}
                />
                <Skeleton
                    variant="text"
                    width={theme.typography.pxToRem(100)}
                />
                <Skeleton
                    variant="text"
                    width={theme.typography.pxToRem(200)}
                />
                <Skeleton
                    variant="rounded"
                    width={theme.typography.pxToRem(100)}
                />
            </Stack>
        </Popover>
    );
};
