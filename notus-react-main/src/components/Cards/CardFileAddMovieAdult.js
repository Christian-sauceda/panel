import React from "react";

// components

export default function CardFileAddMovieAdult() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center items-center p-16 content-center">
                            <div className="relative">
                                <img
                                    alt="..."
                                    src={require("assets/img/back.jpg").default}
                                    className="obsolute rounded-3xl -m-16 -ml-20 lg:-ml-16"
                                />
                                <img
                                    alt="..."
                                    src={require("assets/img/poster.jpg").default}
                                    className="shadow-xl border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                            </div>
                            
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">

                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                            Jennasssss Stones
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                            Los Angeles, California
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                            Solution Manager - Cristian Sauceda Officer
                        </div>
                        <div className="mb-2 text-blueGray-600">
                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                            University of Computer Science
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
