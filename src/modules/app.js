import React from "react";
import indexRoutes from "../routes";
import { Router, Route, Switch } from "react-router-dom";

import { History } from "../utils/History";
import { PrivateRoute } from "../routes/PrivateRoutes";
import BlankLayout from "../layouts/BlankLayout";
import { AppContextProvider } from "../contexts/appContext";

const App = () => {
  return (
    <AppContextProvider>
      <Router history={History}>
        <Switch>
          <Route exact path="/authentication/login" component={BlankLayout} />

          {indexRoutes.map((prop, key) => {
            return <PrivateRoute path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
    </AppContextProvider>
  );
};
export default App;
