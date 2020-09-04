import React, {Component} from "react";
import {
    // BrowserRouter,
    // Route, Switch, Redirect
} from "react-router-dom";
// import widthResize from "../services/widthResize";
import NavigationBoots from "../Page/NavigationBoots";
import FooterBoots from "../Page/FooterBoots/FooterBoots";
import MainBoots from "../Page/MainBoots/MainBoots";


class App extends Component {
    componentDidMount() {
        // widthResize();
    }

    render() {
        return (
            <>
                <NavigationBoots/>
                <MainBoots/>
                {/*<div className={stylish.container}>*/}
                {/*<Switch>*/}
                {/*<Route exact path={routes.HOME} component={IntegralPage} />*/}
                {/*<Route exact path={routes.CONTACT} component={ContactPage} />*/}
                {/*<Route*/}
                {/*path={`${routes.PRODUCTS}/:categorynum`}*/}
                {/*component={IntegralViewCategoryProducts}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*path={`${routes.PRODUCT_CODE}/:someIDproduct`}*/}
                {/*component={IntegralProduct_CodeDetails}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*path={`${routes.PRODUCT}/:someIDproduct`}*/}
                {/*component={IntegralProductDetails}*/}
                {/*/>*/}
                {/*/!* <Route exact path={`${routes.FILTERDB}`} component={SearchForm} /> *!/*/}
                {/*<Redirect to={routes.HOME} />*/}
                {/*</Switch>*/}
                {/*</div>*/}
                <FooterBoots/>
            </>
        );
    }
}

export default App;
