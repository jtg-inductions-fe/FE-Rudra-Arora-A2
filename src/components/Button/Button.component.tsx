import Button from '@mui/material/Button';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const ReusableButton = ({ Text, onClick }: ButtonProps) => (
    <>
        <StyledButton variant="contained" onClick={onClick}>
            {Text}
        </StyledButton>
    </>
);

export default Button;
