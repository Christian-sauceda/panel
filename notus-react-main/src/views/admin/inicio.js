import React from "react";

// components

import CardUltimasPelisEs from "components/Cards/CardUltimasPelisEs.js";
import CardUltimasPelisEn from "components/Cards/CardUltimasPelisEn.js";
import CardUltimasSeriesEs from "components/Cards/CardUltimasSeriesEs.js";
import CardUltimasSeriesEn from "components/Cards/CardUltimasSeriesEn.js";
import CardUltimasPelisAdult from "components/Cards/CardUltimasPelisAdult.js";
import CardStats from "components/Cards/CardStats";

export default function Dashboard() {
  return (
    <>


      <div className="flex flex-wrap pb-10">

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Películas Español"
            statTitle="2356"
            statIconName="fas fa-film"
            statIconColor="bg-indigo-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Películas Ingles"
            statTitle="2356"
            statIconName="fas fa-video"
            statIconColor="bg-orange-500"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Series en Español"
            statTitle="924"
            statIconName="fas fa-tv"
            statIconColor="bg-sky-800"
          />
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <CardStats
            statSubtitle="Total Series en Ingles"
            statTitle="485"
            statIconName="fas fa-file-video"
            statIconColor="bg-red-700"
          />
        </div>
      </div>

      <div className="flex flex-wrap mt-4 pt-6 ">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardUltimasPelisEs />
        </div>

        <div className="w-full xl:w-4/12 px-4">
          <CardUltimasSeriesEs />
        </div>

        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardUltimasPelisEn />
        </div>

        <div className="w-full xl:w-4/12 px-4">
          <CardUltimasSeriesEn />
        </div>

        <div className="w-full xl:w-12/12 px-4">
          <CardUltimasPelisAdult />
        </div>

      </div>
    </>
  );
}
