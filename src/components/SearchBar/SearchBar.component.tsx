import { useCallback, useMemo, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { debounce, InputAdornment, TextField } from '@mui/material';

import { StyledSearchBar } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
    searchItems,
    handleSearchChange,
}: SearchBarProps) => {
    const [options, setOptions] = useState<string[]>(searchItems);
    const [inputvalue, setInputValue] = useState('');

    const debouncedFiltering = useMemo(
        () =>
            debounce((value: string) => {
                if (value !== undefined) {
                    if (!value.trim) {
                        setOptions(searchItems);
                        return;
                    }

                    const filtered = searchItems.filter((item) =>
                        item.toLowerCase().includes(value.toLowerCase()),
                    );

                    setOptions(filtered);
                }
            }, 500),
        [],
    );

    const handleInputChange = useCallback(
        (_event: React.SyntheticEvent, value: string) => {
            setInputValue(value);
            debouncedFiltering(value);
        },
        [debouncedFiltering],
    );

    return (
        <StyledSearchBar
            freeSolo
            disableClearable
            onChange={(_event, value) => {
                if (typeof value == 'string') {
                    handleSearchChange(value);
                }
            }}
            options={options}
            inputValue={inputvalue}
            onInputChange={(event, value) => handleInputChange(event, value)}
            filterOptions={(option) => option}
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
