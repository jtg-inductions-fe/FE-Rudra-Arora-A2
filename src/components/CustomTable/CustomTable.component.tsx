import {
    Chip,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { CustomTableProps } from './CustomTable.types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.background.default,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const CustomTable = ({ data, visibleColumn }: CustomTableProps) => {
    const theme = useTheme();

    return (
        <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <StyledTableRow
                        sx={{
                            borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.divider}`,
                        }}
                    >
                        {visibleColumn.map((item) => (
                            <StyledTableCell key={item}>{item}</StyledTableCell>
                        ))}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.date}>
                            <StyledTableCell component="th" scope="row">
                                {row.label}
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                {row.date}
                            </StyledTableCell>
                            <StyledTableCell>{row.amount}</StyledTableCell>
                            <StyledTableCell>
                                <Chip
                                    size="small"
                                    sx={{ width: theme.typography.pxToRem(90) }}
                                    color={
                                        row.status === 'Cancelled'
                                            ? 'error'
                                            : row.status === 'Completed'
                                              ? 'success'
                                              : 'info'
                                    }
                                    label={row.status}
                                />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
