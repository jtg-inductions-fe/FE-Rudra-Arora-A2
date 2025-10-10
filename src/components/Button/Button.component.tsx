import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

export const ReusableButton = ({ buttonText, buttonRoute }: ButtonProps) => {
    const navigate = useNavigate();
    return (
        <>
            <StyledButton
                variant="contained"
                onClick={() => void navigate(buttonRoute)}
            >
                {buttonText}
            </StyledButton>
        </>
    );
};

export default Button;
