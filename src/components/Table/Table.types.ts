export type ColumnType<T extends object> = {
    key: keyof T;

    label: string;

    /**
     * Width of the column (in %)
     */
    columnWidth?: number;

    /**
     * Render function for a table column.
     * @param row Data object for the current table row
     * @returns Rendered cell React node
     */
    render?: (row: T) => React.ReactNode;
};

export type TableProps<T extends object> = {
    data: T[];
    columns: ColumnType<T>[];
};

export type TableSkeletonProps = {
    rows?: number;
    columns?: number;
};
