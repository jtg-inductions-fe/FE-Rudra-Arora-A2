type CustomTableRowType = {
    label: string;
    name: string;
    date: string;
    amount: string;
    status: string;
};

export type CustomTableProps = {
    data: CustomTableRowType[];
    visibleColumn: string[];
};
