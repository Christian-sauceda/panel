import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/inicio.js";
import Maps from "views/admin/movie-adults.js";
import Settings from "views/admin/movie-es.js";
import Tables from "views/admin/movie-en.js";

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
            <Route path="/admin/inicio" exact component={Dashboard} />
            <Route path="/admin/movie-adults" exact component={Maps} />
            <Route path="/admin/movie-es" exact component={Settings} />
            <Route path="/admin/movie-en" exact component={Tables} />
            <Redirect from="/admin" to="/admin/inicio" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
