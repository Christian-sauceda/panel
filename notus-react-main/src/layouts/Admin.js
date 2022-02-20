import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Inicio from "views/admin/inicio.js";
import MovieAdult from "views/admin/menuadult.js";
import MovieEsp from "views/admin/movie-es.js";
import MovieEng from "views/admin/movie-en.js";
import SerieEsp from "views/admin/movie-es.js"

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24 mb-11">
          <Switch>
            <Route path="/admin/inicio" exact component={Inicio} />
            <Route path="/admin/movie-adults" exact component={MovieAdult} />
            <Route path="/admin/movie-es" exact component={MovieEsp} />
            <Route path="/admin/movie-en" exact component={MovieEng} />
            <Route path="/admin/series-es" exact component={SerieEsp} />
            <Redirect from="/admin" to="/admin/inicio" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
