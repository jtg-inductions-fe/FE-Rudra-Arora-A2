import {
    Customer,
    Footer,
    Hero,
    Products,
    Sales,
    Transaction,
} from '@containers';

import { CustomerProductStack, StyledStack } from './Main.styles';

const Main = () => (
    <StyledStack component="div" aria-label="Main section wrapper">
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

export default Main;
