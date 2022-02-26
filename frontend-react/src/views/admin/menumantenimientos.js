import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuMantenimientos from "components/Cards/CardMenu";

export default function MenuMantenimientos() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menutv/inter/add-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento Tipo de Audio"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento Tipo de Categoria"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento EPG Channel"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento Tipo de Formato"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento Tipo de Calidad"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento Tipo de Contenido"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menutv/inter/list-tvinter" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuMantenimientos
                        statSubtitle="Mantenimiento Tipo Server"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
