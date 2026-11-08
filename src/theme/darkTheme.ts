import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1D9BF0',
        },
        background:  {
            default: '#0B0707',
            paper: '#16181C'
        },
        text: {
            primary: '#F2F2F2',
            secondary: '#626161'
        }
    }
});
