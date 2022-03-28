import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#7d7d7d',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#fff',
            default: '#fff',
        },
        text: {
            primary: '#7d7d7d',
        },
        divider: '#7d7d7d',
    },
});
