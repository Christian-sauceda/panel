import React from "react";

// components
import CardTableMovieEN from "components/Cards/CardTableMovieEN.js";

export default function Tables() {
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <CardTableMovieEN />
                </div>
            </div>
        </>
    );
}
