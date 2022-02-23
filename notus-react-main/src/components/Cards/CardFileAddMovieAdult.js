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
                            Adjuntar Portada:
                        </h3>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <input
                                type="file"
                                id="file"
                                name="file"
                                className="border-0 px-3 py-3 placeholder-sky-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                            <div className="relative w-full mb-3">
                                <input type="submit"
                                    value="Cargar"
                                    className="bg-blueGray-800 mt-4 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    to="/admin/menumovie/adults/add-movieadult"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
