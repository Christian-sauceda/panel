import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Login from "views/auth/Login.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* si la ruta no existe */}
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/" exact component={Login} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
