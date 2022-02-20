import React from "react";
import { Link } from "react-router-dom";

// components
import CardMenuAdult from "components/Cards/CardMenuAdult";

export default function MenuAdult() {
  return (
    <>

      <div className="flex flex-wrap mt-32">
        <Link to="/admin/movie-adults/add-movieadult" className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardMenuAdult
            statSubtitle="Agregar Pelicula Adulto"
            statIconName="fas fa-plus"
            statIconColor="bg-sky-800"
          />
        </Link>
        <Link to="/admin/movie-adults/list-movieadult" className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardMenuAdult
            statSubtitle="Listar Peliculas Adultos"
            statIconName="fas fa-list"
            statIconColor="bg-sky-800"
          />
        </Link>
    
      </div>

    </>
  );
}
