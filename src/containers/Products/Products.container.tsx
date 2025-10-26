import { Stack, useTheme } from '@mui/material';

import { InfoList, InfoListSkeleton, Typography } from '@components';
import { useProductsData } from '@hooks';

import { getData } from './Products.helpers';
import { StyledStack } from './Products.styles';

export const Products = () => {
    const ProductsResponse = useProductsData();
    const ProductsData = getData(ProductsResponse.data) ?? [];
    const theme = useTheme();

    const valueFormat = (value: number) => (
        <>
            {value}
            <Typography component="span" color="text.disabled">
                {' '}
                sales
            </Typography>
        </>
    );

    const isDataLoading = ProductsResponse.loading;
    const isDataEmpty = !isDataLoading && ProductsData.length === 0;

    return (
        <StyledStack>
            <Typography variant="h2" linesToClamp={1}>
                Top products
            </Typography>

            {isDataLoading && <InfoListSkeleton />}

            {!isDataLoading && isDataEmpty && (
                <Stack sx={{ ...theme.mixins.flexCenter() }} height="100%">
                    <Typography variant="h2" color="text.secondary">
                        No product data available
                    </Typography>
                </Stack>
            )}

            {!isDataLoading && !isDataEmpty && (
                <InfoList data={ProductsData} valueFormat={valueFormat} />
            )}
        </StyledStack>
    );
};
