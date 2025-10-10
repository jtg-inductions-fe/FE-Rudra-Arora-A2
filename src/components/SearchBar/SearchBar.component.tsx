import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { ROUTES } from '@routes';

import { StyledSearchBar } from './SearchBar.style';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = <T,>({ Data, optionKey }: SearchBarProps<T>) => {
    const navigate = useNavigate();

    const handleSearchChange = (productName: string) => {
        const value = productName.split(' ').join('-').toLowerCase();
        void navigate(`${ROUTES.PRODUCTS}/${value}`);
    };

    return (
        <StyledSearchBar
            freeSolo
            disableClearable
            onChange={(_event, value) => {
                if (typeof value == 'string') {
                    handleSearchChange(value);
                }
            }}
            options={Data.map((item) => String(item[optionKey]))}
            renderInput={(params) => (
                <TextField
                    sx={{ color: 'red' }}
                    {...params}
                    placeholder="Search"
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            type: 'search',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            )}
        />
    );
};
