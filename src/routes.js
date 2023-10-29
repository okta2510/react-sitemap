import React from 'react';
//Switch was introduced in react router v4
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import PageOne from "./pages/Page1";
import PageTwo from "./pages/Page2";
import App from "./App";
function Routes() {
  return (
  <BrowserRouter>
    <Switch> 
    <Route exact path='/' component={App}/>
    <Route exact path='/page-1' component={PageOne}/>
    <Route exact path='/page-2' component={PageTwo}/>
    <Route exact path='*'>
      <Redirect to="/" />
    </Route>
    </Switch>
  </BrowserRouter>
  );
}
export default Routes;