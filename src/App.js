import React from 'react';
import HomePage from "./Components/view/HomePage/HomePage";
import Typography from "@mui/material/Typography";
import './styles/global.css'
import theme from "./styles/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <HomePage/>
        </ThemeProvider>
    );
};

export default App;