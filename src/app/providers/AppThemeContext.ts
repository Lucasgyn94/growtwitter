import { createContext } from "react";

export type ThemeMode = 'dark' | 'light';

export interface AppThemeContextData {
    mode: ThemeMode;
    toggleColorMode: () => void;
}

export const AppThemeContext = createContext<AppThemeContextData | undefined>(undefined)