/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import './sidebar.css'
import logo from '../../assets/img/logo.png';

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-sky-800 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/inicio"
          >
            <div className="sidebar__logo">
                <img src={logo} alt="tmp" />
            </div>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-sky-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-sky-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
            <div className="sidebar__logo_text">
                TopMedia+<br/>
            </div>
            <span>Panel de control</span>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {/* INICIO */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/inicio") !== -1
                      ? "text-bg-sky-800 hover:text-sky-800"
                      : "text-sky-700 hover:text-sky-800")
                  }
                  to="/admin/inicio"
                >
                  <i
                    className={
                      "fas fa-home mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/inicio") !== -1
                        ? "opacity-75"
                        : "text-sky-300")
                    }
                  ></i>{" "}
                  Inicio
                </Link>
              </li>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-sky-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Contenido Multimedia
            </h6>
            {/* Navigation */}


            {/* PELICULA ESP */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-normal block " +
                    (window.location.href.indexOf("/admin/menumovie/es") !== -1
                      ? "text-bg-sky-800 hover:text-sky-800"
                      : "text-sky-700 hover:text-sky-800")
                  }
                  to="/admin/menumovie/es"
                >
                  <i
                    className={
                      "fas fa-film mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/menumovie/es") !== -1
                        ? "opacity-75"
                        : "text-sky-300")
                    }
                  ></i>{" "}
                  Películas en Español
                </Link>
              </li>
            {/* PELICULA ENG */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-normal block " +
                    (window.location.href.indexOf("/admin/menumovie/en") !== -1
                      ? "text-bg-sky-800 hover:text-sky-800"
                      : "text-sky-700 hover:text-sky-500")
                  }
                  to="/admin/menumovie/en"
                >
                  <i
                    className={
                      "fas fa-ticket-alt mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/menumovie/en") !== -1
                        ? "opacity-75"
                        : "text-sky-300")
                    }
                  ></i>{" "}
                  Películas en Ingles
                </Link>
              </li>
            {/* PELICULAS ADULT */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-normal block " +
                    (window.location.href.indexOf("/admin/menumovie/adults") !== -1
                      ? "text-bg-sky-800 hover:text-sky-800"
                      : "text-sky-700 hover:text-sky-500")
                  }
                  to="/admin/menumovie/adults"
                >
                  <i
                    className={
                      "fas fa-female mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/menumovie/adults") !== -1
                        ? "opacity-75"
                        : "text-sky-300")
                    }
                  ></i>{" "}
                  Películas Adultos
                </Link>
              </li>
            {/* SERIES ESP */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-normal block " +
                    (window.location.href.indexOf("/admin/menuserie/es") !== -1
                      ? "text-bg-sky-800 hover:text-sky-800"
                      : "text-sky-700 hover:text-sky-500")
                  }
                  to="/admin/menuserie/es"
                >
                  <i
                    className={
                      "fas fa-tv  mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/menuserie/es") !== -1
                        ? "opacity-75"
                        : "text-sky-300")
                    }
                  ></i>{" "}
                  Series en Español
                </Link>
              </li>
              {/* SERIES ESP */}
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-normal block " +
                    (window.location.href.indexOf("/admin/menuserie/en") !== -1
                      ? "text-bg-sky-800 hover:text-sky-800"
                      : "text-sky-700 hover:text-sky-500")
                  }
                  to="/admin/menuserie/en"
                >
                  <i
                    className={
                      "fas fa-fire  mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/menuserie/en") !== -1
                        ? "opacity-75"
                        : "text-sky-300")
                    }
                  ></i>{" "}
                  Series en ingles
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-sky-800 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              contenido Live
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-sky-800 hover:text-sky-800 text-xs uppercase py-3 font-normal block"
                  to="/admin/menutv/es"
                >
                  <i className="fas fa-headset text-sky-800 mr-2 text-sm"></i>{" "}
                  TV en Español
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-sky-800 hover:text-sky-800 text-xs uppercase py-3 font-normal block"
                  to="/admin/menutv/en"
                >
                  <i className="fas fa-language text-sky-800 mr-2 text-sm"></i>{" "}
                  TV en Ingles
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-sky-700 hover:text-sky-500 text-xs uppercase py-3 font-normal block"
                  to="/admin/menutv/inter"
                >
                  <i className="fas fa-globe text-sky-300 mr-2 text-sm"></i>{" "}
                  TV Internacional
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-sky-700 hover:text-sky-500 text-xs uppercase py-3 font-normal block"
                  to="/admin/menueventos/ppv"
                >
                  <i className="fas fa-futbol text-sky-300 mr-2 text-sm"></i>{" "}
                  Eventos deportivos
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-sky-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Mantenimientos
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-sky-700 hover:text-sky-500 text-xs uppercase py-3 font-normal block"
                  to="/admin/menumantenimiento"
                >
                  <i className="fas fa-cog text-sky-400 mr-2 text-sm"></i>{" "}
                  Categorias
                </Link>
              </li>


            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}

          </div>
        </div>
      </nav>
    </>
  );
}
