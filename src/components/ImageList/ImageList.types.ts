export type ImageListProps = {
    data: {
        img: string;
        title: string;
        /**
         * @default 1
         */
        rows_sm?: number;
        /**
         * @default 1
         */
        cols_sm?: number;
        /**
         * @default 1
         */
        rows_lg?: number;
        /**
         * @default 1
         */
        cols_lg?: number;
    }[];
};
