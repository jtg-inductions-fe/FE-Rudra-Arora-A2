import {
    Customer,
    Footer,
    Hero,
    Products,
    Sales,
    Transaction,
} from '@containers';

import { CustomerProductStack, StyledStack } from './Main.styles';

export const Main = () => (
    <StyledStack component="main">
        <Hero />
        <Sales />
        <CustomerProductStack
            component="section"
            aria-label="Customer product section"
        >
            <Customer />
            <Products />
        </CustomerProductStack>
        <Transaction />
        <Footer />
    </StyledStack>
);
