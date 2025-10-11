import { useEffect, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { debounce, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { StyledSearchBar } from './SearchBar.style';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = <T,>({
    Data,
    optionKey,
    mainRoute,
}: SearchBarProps<T>) => {
    const navigate = useNavigate();

    const handleSearchChange = (label: string) => {
        const value = label.split(' ').join('-').toLowerCase();
        void navigate(`${mainRoute}/${value}`);
    };

    const debouncedSearch = useMemo(() => debounce(() => {}, 500), []);

    useEffect(() => () => {
        debouncedSearch.clear();
    });

    return (
        <StyledSearchBar
            freeSolo
            disableClearable
            onChange={(_event, value) => {
                if (typeof value == 'string') {
                    handleSearchChange(value);
                }
            }}
            onInputChange={() => debouncedSearch()}
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
};
