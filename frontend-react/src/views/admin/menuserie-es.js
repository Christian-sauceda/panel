import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuSerieEs from "components/Cards/CardMenu";

export default function MenuSerieEs() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menuserie/es/add-seriees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuSerieEs
                        statSubtitle="Agregar Serie en Español"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menuserie/es/add-capseriees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuSerieEs
                        statSubtitle="Agregar Capítulo Español"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menuserie/es/list-seriees" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuSerieEs
                        statSubtitle="Listar Series Español"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
