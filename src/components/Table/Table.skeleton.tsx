import {
    Box,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useTheme,
} from '@mui/material';

import { TableSkeletonProps } from './Table.types';

export const TableSkeleton = ({
    columns = 4,
    rows = 6,
}: TableSkeletonProps) => {
    const skeletonRows = Array.from({ length: rows });
    const skeletonColumns = Array.from({ length: columns });
    const theme = useTheme();

    return (
        <TableContainer sx={{ width: '100%' }}>
            <Table>
                <TableHead>
                    <TableRow
                        sx={{
                            borderBottom: '2px solid',
                            borderColor: 'divider',
                        }}
                    >
                        {skeletonColumns.map((_, colIndex) => (
                            <TableCell key={colIndex}>
                                <Skeleton
                                    variant="text"
                                    width={theme.typography.pxToRem(100)}
                                    height={theme.typography.pxToRem(30)}
                                    sx={{ borderRadius: 1 }}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {skeletonRows.map((_row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {skeletonColumns.map((_col, colIndex) => (
                                <TableCell key={colIndex}>
                                    <Box
                                        sx={{ ...theme.mixins.flex() }}
                                        gap={1}
                                    >
                                        <Skeleton
                                            variant="text"
                                            width={theme.typography.pxToRem(
                                                120,
                                            )}
                                            sx={{ borderRadius: 1 }}
                                        />
                                    </Box>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
