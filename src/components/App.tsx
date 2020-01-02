import * as React from "react";
import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");
import "./../assets/scss/App.scss";
import Shapes from './Shape';
import Grid from './Grid';

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="app">
                <Grid />
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
