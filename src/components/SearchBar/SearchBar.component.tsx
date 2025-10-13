import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { StyledSearchBar } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = <T,>({
    Data,
    optionKey,
    handleSearchChange,
}: SearchBarProps<T>) => (
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
