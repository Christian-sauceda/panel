import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuUser from "components/Cards/CardMenu";

export default function MenuAdult() {
  return (
    <>

      <div className="flex flex-wrap mt-32">
        <Link to="/admin/menuuser/add-user" className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardMenuUser
            statSubtitle="Agregar Nuevo Administrador"
            statIconName="fas fa-plus"
            statIconColor="bg-sky-800"
          />
        </Link>
        <Link to="/admin/menuuser/list-user" className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardMenuUser
            statSubtitle="Listar Los Administradores"
            statIconName="fas fa-list"
            statIconColor="bg-sky-800"
          />
        </Link>
    
      </div>

    </>
  );
}
