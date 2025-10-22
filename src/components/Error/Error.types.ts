export type ErrorDisplayProps = {
    image: string;
    title: string;
    body: string;
} & (
    | {
          buttonText: string;
          to: string;
      }
    | {
          buttonText?: never;
          to?: never;
      }
);
