import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import home from './Main_Code/home';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

const history = createHistory()
history.listen(location => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})





function Routing() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    })


    return (
        <React.Fragment history={history}>
            {home()}
            <BrowserRouter>
                <Switch>
                    <Route path="/1" component={home} />
                    <Route path="/2" component={home} />
                    <Route path="/3" component={home} />
                    <Route exact path="/" component={() => <home />} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Routing;