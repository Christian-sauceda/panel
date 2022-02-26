import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuEventosPPV from "components/Cards/CardMenu";

export default function MenuEventosPPV() {
    return (
        <>
            <div className="flex flex-wrap mt-32">
                <Link to="/admin/menueventos/ppv/add-event" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuEventosPPV
                        statSubtitle="Agregar Evento Deportivo"
                        statIconName="fas fa-plus"
                        statIconColor="bg-sky-800"
                    />
                </Link>
                <Link to="/admin/menueventos/ppv/list-event" className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardMenuEventosPPV
                        statSubtitle="Listar Evento Deportivos"
                        statIconName="fas fa-list"
                        statIconColor="bg-sky-800"
                    />
                </Link>
            </div>
        </>
    );
}
