import { Box, Button, Typography } from "@mui/material";
import { useAppTheme } from "./app/providers/useAppTheme";

export const App = () => {

    const { mode, toggleColorMode } = useAppTheme();

    return (
        <Box >
            <Typography variant="h4" gutterBottom>
                Olá mundo!
            </Typography>

            <Typography variant="body1" sx={{marginBottom: 2}}>
                Tema atual: {mode}
            </Typography>

            <Button variant="contained" onClick={toggleColorMode}>
                Alternar tema
            </Button>

        </Box>
    );
}