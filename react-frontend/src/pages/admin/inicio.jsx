import React from "react";
import { useState, useEffect } from "react";
import ClienteAxios from "../../config/axios";
// components
import CardStats from "../../components/Cards/CardStats.jsx";
import CardUltimasPelisEs from "../../components/Cards/CardUltimasPelisEs.jsx";
import CardUltimasPelisEn from "../../components/Cards/CardUltimasPelisEn.jsx";
import CardUltimasSeriesEs from "../../components/Cards/CardUltimasSeriesEs.jsx";
import CardUltimasSeriesEn from "../../components/Cards/CardUltimasSeriesEn.jsx";
import CardUltimasPelisAdult from "../../components/Cards/CardUltimasPelisAdult.jsx";

export default function Inicio() {
  const [movieses, setMovieses] = useState([]);
  const [moviesen, setMoviesen] = useState([]);
  const [moviesadult, setMoviesadult] = useState([]);
  const [serieses, setSerieses] = useState([]);
  const [seriesen, setSeriesen] = useState([]);

  const mostrarDatos = async () => {
    try {
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const resultadomes = await ClienteAxios.get("/mtmovie/es/count/es", config).then((response) => {
        const mes = response.data;
        setMovieses(mes)
      })

      const resultadomen = await ClienteAxios.get("/mtmovie/en/count/en", config).then((response) => {
        const men = response.data;
        setMoviesen(men)
      })

      const resultadomad = await ClienteAxios.get("/mtmovie/adult/count/adult", config).then((response) => {
        const mad = response.data;
        setMoviesadult(mad)
      })

      const resultadoses = await ClienteAxios.get("/mttvshows/es/count/es", config).then((response) => {
        const ses = response.data;
        setSerieses(ses)
      })

      const resultadosen = await ClienteAxios.get("/mttvshows/en/count/en", config).then((response) => {
        const sen = response.data;
        setSeriesen(sen)
      })

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    mostrarDatos();
  }, [])
  //recorrer arreglo de series

  return (
    <>
      <div className="flex flex-wrap pb-10">

        {movieses.map((item) => (
          <div className="w-full lg:w-6/12 xl:w-2/12 px-4">
            <CardStats
              statSubtitle="Total Películas Español"
              statTitle={item.moviees}
              statIconName={`fas fa-film`}
              statIconColor="bg-indigo-500"
            />
          </div>
        ))}

        {moviesen.map((item) => (
          <div className="w-full lg:w-6/12 xl:w-2/12 px-4">
            <CardStats
              statSubtitle="Total Películas Inglés"
              statTitle={item.movieen}
              statIconName="fas fa-video"
              statIconColor="bg-orange-500"
            />
          </div>
        ))}

        {moviesadult.map((item) => (
          <div className="w-full lg:w-6/12 xl:w-2/12 px-4">
            <CardStats
              statSubtitle="Total Películas para Adultos"
              statTitle={item.moviead}
              statIconName="fas fa-tv"
              statIconColor="bg-green-500"
            />
          </div>
        ))}

        {serieses.map((item) => (
          <div className="w-full lg:w-6/12 xl:w-2/12 px-4">
            <CardStats
              statSubtitle="Total Series en Español"
              statTitle={item.seriees}
              statIconName="fas fa-tv"
              statIconColor="bg-sky-800"
            />
          </div>
        ))}

        {seriesen.map((item) => (
          <div className="w-full lg:w-6/12 xl:w-2/12 px-4">
            <CardStats
              statSubtitle="Total Series en Inglés"
              statTitle={item.serieen}
              statIconName="fas fa-file-video"
              statIconColor="bg-red-700"
            />
          </div>
        ))}

      </div>

      <div className="flex flex-wrap mt-4 pt-6 ">
        <div className="w-full xl:w-8/12 px-4">
          <CardUltimasPelisEs />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardUltimasSeriesEs />
        </div>
        <div className="w-full xl:w-8/12 px-4">
          <CardUltimasPelisEn />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardUltimasSeriesEn />
        </div>
        <div className="w-full xl:w-8/12 px-4">
          <CardUltimasPelisAdult />
        </div>
      </div>

    </>
  );
}
