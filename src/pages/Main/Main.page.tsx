
import { Customer, Hero, Products, Sales, Transaction } from '@containers';

import { CustomerProductStack, StyledStack } from './Main.styles';

export const Main = () => (
    <StyledStack>
        <Hero />
        <Sales />
        <CustomerProductStack>
            <Customer />
            <Products />
        </CustomerProductStack>
        <Transaction/>
    </StyledStack>
);
