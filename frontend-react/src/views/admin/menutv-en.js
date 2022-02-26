import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuTvEN from "components/Cards/CardMenu";

export default function MenuTvEN() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menutv/en/add-tven" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuTvEN
                        statSubtitle="Agregar Tv Live en Ingles"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/en/list-tven" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuTvEN
                        statSubtitle="Listar Tv Live en Ingles"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
