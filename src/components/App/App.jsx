import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import routes from "../../routes/routes";
// import widthResize from "../services/widthResize";
import NavigationBoots from "../Page/NavigationBoots";
import FooterBoots from "../Page/FooterBoots/FooterBoots";
import MainBoots from "../Page/MainBoots/MainBoots";
import ViewCategoryProducts from "../Page/MainBoots/ViewCategoryProducts/ViewCategoryProducts"
import ContactBoots from "../Page/MainBoots/ContactBoots/ContactBoots";


class App extends Component {
    componentDidMount() {
        // widthResize();
    }

    render() {
        return (
            <BrowserRouter>
                <NavigationBoots/>
                <Switch>
                    <Route exact path={routes.HOME} component={MainBoots}/>
                    <Route exact path={routes.CONTACT} component={ContactBoots}/>
                    <Route path={`${routes.PRODUCTS}/:categorynum`} component={ViewCategoryProducts}/>
                    <Redirect to={routes.HOME} />
                </Switch>

                <FooterBoots/>
            </BrowserRouter>
        );
    }
}

export default App;
