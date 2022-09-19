import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secundary: string,
    
            background: string,
            text: string,
            shadow: string
        },
        colorTheme: {
            main: {
                background: string,
                backgroundSe: string,
                textColor: string
            },
    
            cards: {
                colorTitle: string,
                bgTitle: string,
                bg: string,
                btn: string,
                tcolor: string
            },
        }
    }
}