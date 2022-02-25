import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
// views
import Inicio from "views/admin/inicio.js";
// menus
import MenuMovieAdult from "views/admin/menuadult.js";
import MenuMovieEs from "views/admin/menumovie-es.js";
import MenuMovieEn from "views/admin/menumovie-en.js";
import MenuSerieEs from "views/admin/menuserie-es.js";
import MenuSerieEn from "views/admin/menuserie-en.js";
//add
import AddMovieAdult from "views/admin/add-movie-adult.js";
import AddMovieEs from "views/admin/add-movie-es.js";
import AddMovieEn from "views/admin/add-movie-en.js";
import AddSerieEs from "views/admin/add-serie-es.js";
import AddCapSerieEs from "views/admin/add-capserie-es.js";
import AddCapSerieEn from "views/admin/add-capserie-en.js";
import AddSerieEn from "views/admin/add-serie-en.js";
//list
import ListMovieAdult from "views/admin/list-movieadult.js";
import ListMovieEs from "views/admin/list-movie-es.js";
import ListMovieEn from "views/admin/list-movie-en.js";
import ListSerieEs from "views/admin/list-serie-es.js";
import ListSerieEn from "views/admin/list-serie-en.js";

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
            {/* menus */}
            <Route path="/admin/menumovie/adults" exact component={MenuMovieAdult} />
            <Route path="/admin/menumovie/es" exact component={MenuMovieEs} />
            <Route path="/admin/menumovie/en" exact component={MenuMovieEn} />
            <Route path="/admin/menuserie/es" exact component={MenuSerieEs} />
            <Route path="/admin/menuserie/en" exact component={MenuSerieEn} />

            {/* add */}
            <Route path="/admin/menumovie/adults/add-movieadult" exact component={AddMovieAdult} />
            <Route path="/admin/menumovie/es/add-moviees" exact component={AddMovieEs} />
            <Route path="/admin/menumovie/en/add-movieen" exact component={AddMovieEn} />
            <Route path="/admin/menuserie/es/add-seriees" exact component={AddSerieEs} />
            <Route path="/admin/menuserie/es/add-capseriees" exact component={AddCapSerieEs} />
            <Route path="/admin/menuserie/en/add-serieen" exact component={AddSerieEn} />
            <Route path="/admin/menuserie/en/add-capserieen" exact component={AddCapSerieEn} />

            {/* list */}
            <Route path="/admin/menumovie/adults/list-movieadult" exact component={ListMovieAdult} />
            <Route path="/admin/menumovie/es/list-moviees" exact component={ListMovieEs} />
            <Route path="/admin/menumovie/en/list-movieen" exact component={ListMovieEn} />
            <Route path="/admin/menuserie/es/list-seriees" exact component={ListSerieEs} />
            <Route path="/admin/menuserie/en/list-serieen" exact component={ListSerieEn} />
            
            <Redirect from="/admin" to="/admin/inicio" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
