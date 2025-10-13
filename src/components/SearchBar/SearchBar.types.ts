export type SearchBarProps<T> = {
    Data: T[];
    optionKey: keyof T;
    handleSearchChange: (label: string) => void;
};
