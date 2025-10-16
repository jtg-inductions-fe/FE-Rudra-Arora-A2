import { theme } from '@theme';

export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flex: (
            justify: CSSProperties['justifyContent'] = 'flex-start',
            align: CSSProperties['alignItems'] = 'stretch',
            gapping: CSSProperties['gap'] = '0px',
            direction: CSSProperties['flexDirection'] = 'row',
        ) => CSSProperties;
        flexCenter: (
            direction: CSSProperties['flexDirection'] = 'row',
        ) => CSSProperties;
        BoxStyle: (
            padding: CSSProperties['padding'],
            borderRadius: CSSProperties['borderRadius'] = '16px',
            boxShadow: CSSProperties['boxShadow'] = theme.shadows[1],
            backgroundColor: CSSProperties['backgroundColor'] = theme.palette
                .common.white,
        ) => CSSProperties;
    }
}
