import { Link } from 'react-router-dom';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const ReusableButton = ({ text, onClick }: ButtonProps) => (
    <StyledButton LinkComponent={Link} variant="contained" onClick={onClick}>
        {text}
    </StyledButton>
);
