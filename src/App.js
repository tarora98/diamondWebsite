import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import ReactGA from 'react-ga';
import home from './home/Home';
import createHistory from 'history/createBrowserHistory';


const Error404 = () => {
  return (
    <h1>Page Not Found</h1>
  );
}


const history = createHistory()
history.listen(location => {
  ReactGA.set({ page: location.pathname })
  ReactGA.pageview(location.pathname)
})


const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  })


  return (

    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" component={() => <Routing />} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
