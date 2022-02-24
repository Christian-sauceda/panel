import React from "react";

// components

import CardTableAdult from "components/Cards/CardTableAdult.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableAdult />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTableAdult color="dark" />
        </div>
      </div>
    </>
  );
}
