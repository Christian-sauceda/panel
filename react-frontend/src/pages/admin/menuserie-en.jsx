import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuSerieEn from "components/Cards/CardMenu";

export default function MenuSerieEn() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menuserie/en/add-serieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuSerieEn
                        statSubtitle="Agregar Serie en Inglés"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menuserie/en/add-capserieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuSerieEn
                        statSubtitle="Agregar Capítulo Inglés"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menuserie/en/list-serieen" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuSerieEn
                        statSubtitle="Listar Series en Inglés"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
