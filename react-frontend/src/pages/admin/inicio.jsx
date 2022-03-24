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
  const [series, guardarSeries] = useState([]);
    const mostrarDatos = async () => {
        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const resultado = await ClienteAxios.get("/mtmovie/es/countmoviees", config).then((response) => {
                const data = response.data;
                guardarSeries(data)
            })
        } catch (error) {
            console.log(error);
        }
    };
        useEffect(() => {
        mostrarDatos();
    }, [])
  return (
    <>
      <div className="flex flex-wrap pb-10">

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Películas Español"
            statTitle="{''}"
            statIconName={`fas fa-film`}
            statIconColor="bg-indigo-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Películas Inglés"
            statTitle="0"
            statIconName="fas fa-video"
            statIconColor="bg-orange-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Series en Español"
            statTitle="2"
            statIconName="fas fa-tv"
            statIconColor="bg-sky-800"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Series en Inglés"
            statTitle="3"
            statIconName="fas fa-file-video"
            statIconColor="bg-red-700"
          />
        </div>
      </div>

      <div className="flex flex-wrap mt-4 pt-6 ">
        <div className="w-full xl:w-6/12 px-4">
          <CardUltimasPelisEs />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardUltimasSeriesEs />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardUltimasPelisEn />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardUltimasSeriesEn />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <CardUltimasPelisAdult />
        </div>
      </div>

    </>
  );
}
