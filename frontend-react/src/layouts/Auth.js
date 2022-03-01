import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/recuperar-password.js";
import ConfirmarCuenta from "views/auth/confirmar-cuenta.js";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/recuperar-password" exact component={Register} />
            <Route path="/confirmar/:id" exact component={ConfirmarCuenta} />
            <Redirect from="/" to="/" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
