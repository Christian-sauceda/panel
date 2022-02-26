import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuMovieEs from "components/Cards/CardMenu";

export default function MenuMovieEs() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menumovie/es/add-moviees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMovieEs
                        statSubtitle="Agregar Película en Español"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menumovie/es/list-moviees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMovieEs
                        statSubtitle="Listar Películas en Español"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
