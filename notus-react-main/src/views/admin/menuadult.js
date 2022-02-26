import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuAdult from "components/Cards/CardMenu";

export default function MenuAdult() {
  return (
    <>

      <div className="flex flex-wrap mt-32">
        <Link to="/admin/menumovie/adults/add-movieadult" className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardMenuAdult
            statSubtitle="Agregar Película Adulto"
            statIconName="fas fa-plus"
            statIconColor="bg-sky-800"
          />
        </Link>
        <Link to="/admin/menumovie/adults/list-movieadult" className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardMenuAdult
            statSubtitle="Listar Películas Adultos"
            statIconName="fas fa-list"
            statIconColor="bg-sky-800"
          />
        </Link>
    
      </div>

    </>
  );
}
