import React, { useState } from "react";

import './switcher.css'

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./Theme";

function Switcher() {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };


    return (

        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="switch">
                <label>
                <button className="switch" type="checkbox" onClick={switchTheme}></button>
                </label>
            </div>
        </ThemeProvider>
    );
}
export default Switcher;