import { Stack, useTheme } from '@mui/material';

import { InfoList, InfoListSkeleton, Typography } from '@components';
import { useCustomerData } from '@hooks';

import { getData } from './Customer.helpers';
import { StyledStack } from './Customer.styles';

export const Customer = () => {
    const CustomerResponse = useCustomerData();
    const CustomersData = getData(CustomerResponse.data) ?? [];
    const theme = useTheme();

    const valueFormat = (value: number) => `$${value}`;

    const isDataLoading = CustomerResponse.loading;
    const isDataEmpty = !isDataLoading && CustomersData.length === 0;

    return (
        <StyledStack component="section" aria-label="Customer Section">
            <Typography variant="h2" linesToClamp={1}>
                Latest Customers
            </Typography>

            {isDataLoading && <InfoListSkeleton />}

            {!isDataLoading && isDataEmpty && (
                <Stack sx={{ ...theme.mixins.flexCenter() }} height="100%">
                    <Typography variant="h2" color="text.secondary">
                        No customer data available
                    </Typography>
                </Stack>
            )}

            {!isDataLoading && !isDataEmpty && (
                <InfoList data={CustomersData} valueFormat={valueFormat} />
            )}
        </StyledStack>
    );
};
