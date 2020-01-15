import React, {Fragment} from 'react';
import "./App.css";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Room from "./pages/Room";
import Home from "./pages/Home";

import {Route, Switch} from "react-router-dom"


function App() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms/" component={Room}/>
                <Route exact path="/rooms/:slug" component={SingleRoom}/>
                <Route component={Error}/>
            </Switch>
        </Fragment>
    );
}

export default App;