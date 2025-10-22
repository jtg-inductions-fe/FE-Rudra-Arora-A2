import {
    Chip,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { StyledTableCell, StyledTableRow } from './CustomTable.styles';
import { CustomTableProps } from './CustomTable.types';

export const CustomTable = ({ data, visibleColumn }: CustomTableProps) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <TableContainer sx={{ borderRadius: theme.typography.pxToRem(12) }}>
            <Table aria-label="customized table">
                <TableHead>
                    <StyledTableRow
                        sx={{
                            borderBottom: `${theme.typography.pxToRem(1)} solid ${theme.palette.divider}`,
                        }}
                    >
                        {visibleColumn.map((item, index) => (
                            <StyledTableCell
                                align={
                                    index % 2 === 0 || isDesktop
                                        ? 'inherit'
                                        : 'right'
                                }
                                key={index}
                            >
                                <Typography variant="subtitle1">
                                    {item}
                                </Typography>
                            </StyledTableCell>
                        ))}
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row.date}>
                            <StyledTableCell>
                                <Typography
                                    variant="subtitle2"
                                    component={'span'}
                                >
                                    {row.label}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component={'span'}
                                >
                                    {' '}
                                    {row.name}
                                </Typography>
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                <Typography
                                    align={isDesktop ? 'inherit' : 'right'}
                                    variant="subtitle2"
                                >
                                    {row.date}
                                </Typography>
                            </StyledTableCell>
                            {visibleColumn.length > 2 && (
                                <StyledTableCell>
                                    <Typography variant="body1">
                                        {row.amount}
                                    </Typography>
                                </StyledTableCell>
                            )}
                            {visibleColumn.length > 2 && (
                                <StyledTableCell>
                                    <Chip
                                        size="small"
                                        sx={{
                                            width: theme.typography.pxToRem(90),
                                        }}
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
                            )}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
