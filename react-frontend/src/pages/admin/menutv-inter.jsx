import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuTvInter from "components/Cards/CardMenu";

export default function MenuTvInter() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menutv/inter/add-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuTvInter
                        statSubtitle="Agregar Tv Live Internacional"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuTvInter
                        statSubtitle="Listar Tv Live Internacional"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
