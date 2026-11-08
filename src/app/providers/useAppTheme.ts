import { useContext } from "react";
import { AppThemeContext } from "./AppThemeContext";

export function useAppTheme() {
    const context = useContext(AppThemeContext);

    if (!context) {
        throw new Error('A função "useAppTheme" deverá ser utilizada dentro de AppThemeProvider.')
    }

    return context;
}