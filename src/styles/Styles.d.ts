import 'styled-components/native'
declare module 'styled-components/native' {
    interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            black: string,
            gray: string,
            tag: string,
            green: string,
            red: string,
            purple: string,
        }
    }
}