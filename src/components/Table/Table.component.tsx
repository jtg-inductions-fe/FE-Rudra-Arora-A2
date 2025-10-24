import {
    Table as MuiTable,
    TableBody,
    TableContainer,
    TableHead,
    useTheme,
} from '@mui/material';

import { StyledTableCell, StyledTableRow } from './Table.styles';
import { TableProps } from './Table.types';
import { Typography } from '../Typography';

export const Table = <T extends object>({ data, columns }: TableProps<T>) => {
    const theme = useTheme();

    return (
        <TableContainer
            sx={{
                borderRadius: theme.typography.pxToRem(12),
                width: '100%',
                overflowX: 'auto',
            }}
        >
            <MuiTable
                sx={{ minWidth: theme.typography.pxToRem(700) }}
                aria-label="Table"
            >
                <TableHead>
                    <StyledTableRow
                        sx={{
                            borderBottom: `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        {columns.map((col) => (
                            <StyledTableCell
                                key={col.label}
                                sx={{ width: '25%' }}
                            >
                                <Typography variant="subtitle1">
                                    {col.label}
                                </Typography>
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                </TableHead>

                <TableBody>
                    {data.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {columns.map((item) => (
                                <StyledTableCell key={item.label}>
                                    {item.render(row)}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};
