import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuMovieEn from "components/Cards/CardMenu";

export default function MenuMovieEn() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menumovie/en/add-movieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMovieEn
                        statSubtitle="Agregar Película En Inglés"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menumovie/en/list-movieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMovieEn
                        statSubtitle="Listar Películas En Inglés"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
