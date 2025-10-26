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

export const TableSkeleton = () => {
    const rows = Array.from({ length: 6 });
    const columns = Array.from({ length: 4 });
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
                        {columns.map((_, colIndex) => (
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
                    {rows.map((_row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((_col, colIndex) => (
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
