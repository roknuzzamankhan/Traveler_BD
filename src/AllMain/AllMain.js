import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Components/Header/Header";

const AllMain = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path = "/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default AllMain;
