import React from "react";

// components
import CardStats from "../../components/Cards/CardStats.jsx";

export default function Inicio() {
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
            statSubtitle="Total Películas Inglés"
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
            statSubtitle="Total Series en Inglés"
            statTitle="485"
            statIconName="fas fa-file-video"
            statIconColor="bg-red-700"
          />
        </div>
      </div>

    </>
  );
}
