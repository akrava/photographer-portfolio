import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@components/routes/Home";
import Contact from "@components/routes/Contact";
import About from "@components/routes/About";
import Login from "@routes/Login";
import Register from "@routes/Register";
import NotFound from "@components/routes/NotFound";
import Logout from "@components/routes/Logout";
import Breadcrumbs from "@components/special/Breadcrumbs";
import Photos from "@routes/Photos";
import Photo from "@routes/Photo";
import Portfolios from "@routes/Portfolios";
import Portfolio from "@routes/Portfolio";
import ErrorBoundary from "@components/service/ErrorBoundary";

class Main extends React.Component {
    renderOrdinaryTemplate = () => {
        return (
            <main className="container main__container">
                <ErrorBoundary>
                    <Switch>
                        <Route exact={true} path="/" />
                        <Route component={Breadcrumbs} />
                    </Switch>
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/about" component={About} />
                        <Route exact={true} path="/contact" component={Contact} />
                        <Route exact={true} path="/logout" component={Logout} />
                        <Route path="/photos" exact={true} component={Photos} />
                        <Route path="/photos/:number(\d+)" exact={true} component={Photo} />
                        <Route
                            path="/portfolios(/photographers|/designers|/artists|)"
                            exact={true}
                            component={Portfolios}
                        />
                        <Route
                            path="/portfolio/:login([A-Za-z_0-9]{5,20})"
                            exact={true}
                            component={Portfolio}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </ErrorBoundary>
            </main>
        );
    }

    renderFullViewPortTemplate = () => {
        return (
            <Switch>
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/register" component={Register} />
            </Switch>
        );
    }

    render() {
        const { renderOrdinaryTemplate, renderFullViewPortTemplate } = this;
        return (
            <ErrorBoundary>
                <Switch>
                    <Route path="/(login|register)/">
                        {renderFullViewPortTemplate}
                    </Route>
                    <Route>
                        {renderOrdinaryTemplate}
                    </Route>
                </Switch>
            </ErrorBoundary>
        );
    }
}

export default Main;
