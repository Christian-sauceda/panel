import React from "react";

// components

import CardUltimasPelisEs from "components/Cards/CardUltimasPelisEs.js";
import CardUltimasSeriesEs from "components/Cards/CardUltimasSeriesEs.js";
import CardStats from "components/Cards/CardStats";

export default function Dashboard() {
  return (
    <>
    

      <div className="flex flex-wrap pb-10">
        
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Peliculas Español"
                  statTitle="2356"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Peliculas Ingles"
                  statTitle="2356"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Series en Español"
                  statTitle="924"
                  statIconName="fas fa-tv"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total Series en Ingles"
                  statTitle="485"
                  statIconName="fas fa-tv"
                  statIconColor="bg-sky-800"
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
      </div>
    </>
  );
}