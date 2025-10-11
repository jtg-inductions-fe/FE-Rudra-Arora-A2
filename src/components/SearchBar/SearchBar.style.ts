import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

export const StyledSearchBar = styled(Autocomplete)(({ theme }) => ({
    width: theme.typography.pxToRem(402),
    '& .MuiOutlinedInput-root': {
        border: `${theme.typography.pxToRem(1)} solid ${theme.palette.divider}`,
        height: theme.typography.pxToRem(45),
        borderRadius: theme.typography.pxToRem(16),
        backgroundColor: theme.palette.background.default,
        boxShadow: `0 ${theme.typography.pxToRem(3)} ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(1)} ${theme.palette.divider}`,
        paddingRight: theme.spacing(1),
    },
    '& input': {
        paddingLeft: theme.spacing(1),
    },
}));
