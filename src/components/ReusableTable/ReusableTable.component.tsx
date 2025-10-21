import {
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    useTheme,
} from '@mui/material';

import { TableProps } from './ReusableTable.types';

export const ReusableTable = ({ data, valueFormat }: TableProps) => {
    const theme = useTheme();

    return (
        <TableContainer>
            <Table
                sx={{
                    borderCollapse: 'collapse',
                }}
            >
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:not(:last-child)': {
                                    borderBottom: '2px solid',
                                    borderColor: 'divider',
                                },
                            }}
                        >
                            {item.avatar && (
                                <TableCell padding="none" width={40}>
                                    <Avatar
                                        src={item.avatar}
                                        alt={item.label}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            pr: theme.typography.pxToRem(8),
                                        }}
                                    />
                                </TableCell>
                            )}
                            <TableCell sx={{ p: 0 }}>
                                <Typography variant="h4">
                                    {item.label}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                >
                                    {item.caption}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h4" textAlign="right">
                                    {valueFormat(item.value)}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
