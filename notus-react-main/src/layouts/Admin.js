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

//list
import ListMovieAdult from "views/admin/list-movieadult.js";
import ListMovieEs from "views/admin/list-movie-es.js";
import ListMovieEn from "views/admin/list-movie-en.js";

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


            {/* list */}
            <Route path="/admin/menumovie/adults/list-movieadult" exact component={ListMovieAdult} />
            <Route path="/admin/menumovie/es/list-moviees" exact component={ListMovieEs} />
            <Route path="/admin/menumovie/en/list-movieen" exact component={ListMovieEn} />
            
            <Redirect from="/admin" to="/admin/inicio" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
