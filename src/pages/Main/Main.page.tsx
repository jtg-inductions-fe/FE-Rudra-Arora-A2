import { Customer, Hero, Products, Sales, Transaction, Footer } from '@containers';

import { CustomerProductStack, StyledStack } from './Main.styles';

export const Main = () => (
    <StyledStack>
        <Hero />
        <Sales />
        <CustomerProductStack>
            <Customer />
            <Products />
        </CustomerProductStack>
        <Transaction />
        <Footer/>
    </StyledStack>
);
