import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1D9BF0'
        },
        background: {
            default: '#FFFFFF',
            paper: '#F7F9FA'
        },
        text: {
            primary: '#0F1419',
            secondary: '#536471'
        }
    }
});
