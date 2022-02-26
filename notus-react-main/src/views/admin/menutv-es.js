import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuTvEs from "components/Cards/CardMenu";

export default function MenuTvES() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menutv/es/add-tves" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuTvEs
                        statSubtitle="Agregar Tv en Vivo en Español"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/es/list-tves" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuTvEs
                        statSubtitle="Listar Tv en Vivo en Español"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
