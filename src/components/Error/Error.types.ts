import { ElementType } from 'react';

export type ErrorProps = {
    image: string;
    title: string;
    body: string;
    buttonText: string;
    to?: string;
    buttonComponent: ElementType;
};
