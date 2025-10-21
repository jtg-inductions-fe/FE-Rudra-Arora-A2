type TableRowType = {
    label: string;
    caption: string;
    value: string;
    avatar?: string;
};

export type TableProps = {
    data: TableRowType[];
};
