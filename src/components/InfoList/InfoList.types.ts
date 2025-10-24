type InfoListType = {
    label: string;
    caption: string;
    value: number;
    avatar?: string;
};

export type InfoListProps = {
    data: InfoListType[];
    valueFormat: (value: number) => string | React.ReactNode;
};
