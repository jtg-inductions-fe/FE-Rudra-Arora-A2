type TableRowType = {
    label: string;
    caption: string;
    value: number;
    avatar?: string;
};

export type TableProps = {
    data: TableRowType[];
    valueFormat: (value: number) => string | React.ReactNode;
};
