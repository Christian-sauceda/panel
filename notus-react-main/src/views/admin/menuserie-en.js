import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuAdult from "components/Cards/CardMenuAdult";

export default function MenuSerieEs() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menuserie/en/add-serieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuAdult
                        statSubtitle="Agregar Serie en Ingles"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menuserie/en/add-capserieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuAdult
                        statSubtitle="Agregar Capítulo Ingles"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menuserie/en/list-serieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuAdult
                        statSubtitle="Listar Series en Ingles"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
