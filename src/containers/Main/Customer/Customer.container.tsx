import { Box, Stack, Typography, useTheme } from '@mui/material';

import TableSkeleton from '@assets/images/table-skeleton.webp';
import { ReusableTable } from '@components';
import { useCustomerData } from '@hooks';

export const Customer = () => {
    const theme = useTheme();
    const CustomerResponse = useCustomerData();

    const CustomersData =
        CustomerResponse.data?.map((item) => ({
            label: item.customerName,
            caption: item.customerEmail,
            value: item.customerAmount,
            avatar: item.customerImage,
        })) ?? [];

    const valueFormat = (value: number) => `$${value}`;

    return (
        <Stack
            flex={2}
            sx={{
                ...theme.mixins.BoxStyle(theme.typography.pxToRem(16)),

                [theme.breakpoints.up('md')]: {
                    ...theme.mixins.BoxStyle(theme.typography.pxToRem(24)),
                },
            }}
            gap={theme.spacing(4)}
        >
            <Typography variant="h2">Latest Customers</Typography>
            {!CustomerResponse.loading ? (
                <ReusableTable data={CustomersData} valueFormat={valueFormat} />
            ) : (
                <Box component="img" src={TableSkeleton} width={'100%'} />
            )}
        </Stack>
    );
};
