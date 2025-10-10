import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

export const StyledSearchBar = styled(Autocomplete)(({ theme }) => ({
    width: '402px',
    '& .MuiOutlinedInput-root': {
        border: '1px solid palette.secondary.main',
        height: '45px',
        borderRadius: '16px',
        backgroundColor: theme.palette.background.default,
        boxShadow: '0px 1px 4px #B7B7B7',
        paddingRight: theme.spacing(1),
    },
    '& input': {
        paddingLeft: theme.spacing(1),
    },
}));
