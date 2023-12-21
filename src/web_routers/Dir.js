import { Route, BrowserRouter, Switch } from "react-router-dom"
import React, { Component } from 'react';
import Home from "../pages/Home";

class Dir extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Dir