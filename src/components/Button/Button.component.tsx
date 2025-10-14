import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const ReusableButton = ({ text, onClick, component }: ButtonProps) => (
    <StyledButton
        component={component}
        variant="contained"
        onClick={onClick}
        rel="noopener"
    >
        {text}
    </StyledButton>
);
