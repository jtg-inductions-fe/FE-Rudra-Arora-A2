import { useCallback, useEffect, useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { debounce, InputAdornment, TextField } from '@mui/material';

import { SearchBarConstants } from './SearchBar.constants';
import { StyledSearchBar } from './SearchBar.styles';
import type { SearchBarProps } from './SearchBar.types';

export const SearchBar = ({
    searchItems,
    handleSearchChange,
}: SearchBarProps) => {
    const [options, setOptions] = useState<string[]>(searchItems);

    useEffect(() => {
        setOptions(searchItems);
    }, [searchItems]);

    const debouncedFiltering = useCallback(
        debounce((value: string) => {
            if (value !== undefined) {
                const filtered = searchItems.filter((item) =>
                    item.toLowerCase().includes(value.toLowerCase()),
                );

                setOptions(filtered);
            }
        }, SearchBarConstants.SEARCHDELAY),
        [searchItems],
    );

    useEffect(
        () => () => {
            debouncedFiltering.clear();
        },
        [debouncedFiltering],
    );

    const handleInputChange = useCallback(
        (_event: React.SyntheticEvent, value: string) => {
            debouncedFiltering(value);
        },
        [debouncedFiltering],
    );

    return (
        <StyledSearchBar
            freeSolo
            disableClearable
            onChange={(_event, value) => {
                if (typeof value === 'string') {
                    handleSearchChange(value);
                }
            }}
            options={options}
            onInputChange={handleInputChange}
            filterOptions={(option) => option}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder={SearchBarConstants.PLACEHOLDER}
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
