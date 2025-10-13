import Button from '@mui/material/Button';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const ReusableButton = ({ text, onClick, component }: ButtonProps) => (
    <StyledButton component={component} variant="contained" onClick={onClick}>
        {text}
    </StyledButton>
);

export default Button;
