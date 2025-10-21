import { Box, Stack, Typography, useTheme } from '@mui/material';

import TableSkeleton from '@assets/images/table-skeleton.webp';
import { ReusableTable } from '@components';
import { useProductsData } from '@hooks';

export const Products = () => {
    const theme = useTheme();

    const ProductsResponse = useProductsData();

    const ProductsData =
        ProductsResponse.data?.map((item) => ({
            label: item.productName,
            caption: item.technologyStack,
            value: item.sales,
        })) ?? [];

    const valueFormat = (value: number) => (
        <>
            {value}{' '}
            <Typography component="span" color="text.disabled">
                sales
            </Typography>
        </>
    );

    return (
        <Stack
            flex={3}
            sx={{
                ...theme.mixins.BoxStyle(theme.typography.pxToRem(16)),

                [theme.breakpoints.up('md')]: {
                    ...theme.mixins.BoxStyle(theme.typography.pxToRem(24)),
                },
            }}
            gap={theme.spacing(4)}
        >
            <Typography variant="h2">Top products</Typography>
            {!ProductsResponse.loading ? (
                <ReusableTable data={ProductsData} valueFormat={valueFormat} />
            ) : (
                <Box component="img" src={TableSkeleton} width={'100%'} />
            )}
        </Stack>
    );
};
