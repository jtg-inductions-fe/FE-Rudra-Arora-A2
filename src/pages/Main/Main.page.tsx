import { Customer, Hero, Products, Sales } from '@containers';

import { CustomerProductStack, StyledStack } from './Main.styles';

export const Main = () => (
    <StyledStack>
        <Hero />
        <Sales />
        <CustomerProductStack>
            <Customer />
            <Products />
        </CustomerProductStack>
    </StyledStack>
);
