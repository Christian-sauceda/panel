import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuAdult from "components/Cards/CardMenuAdult";

export default function MenuMovieES() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menumovie/es/add-moviees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuAdult
                        statSubtitle="Agregar Pelicula En Ingles"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menumovie/es/list-moviees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuAdult
                        statSubtitle="Listar Peliculas En Ingles"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
