import { useState } from 'react';
import type { ReactNode } from 'react';
import { darkTheme, lightTheme } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppThemeContext, type ThemeMode } from './AppThemeContext';


interface AppThemeProviderProps {
    children: ReactNode;
}

export function AppThemeProvider({children}: AppThemeProviderProps) {
    const [mode, setMode] = useState<ThemeMode>('dark');

    const toggleColorMode = () => {
        setMode((previousMode) => (
            previousMode === 'dark' ? 'light' : 'dark'
        ));
    };

    const theme = mode === 'dark' ? darkTheme : lightTheme

    return (
        <AppThemeContext.Provider value={{ mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppThemeContext.Provider>

    );
};

