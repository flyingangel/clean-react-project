import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./Theme";

const theme = createMuiTheme(Theme);

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme} >
                <CssBaseline />
                <div>
                    <Main>
                    </Main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;