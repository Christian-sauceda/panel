import React from "react";
import "./card.css";
// components

export default function CardFileAddMovieAdult() {
    return (
        <>
            <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div>
                    <div className="relative left0 top0">
                        <img
                            className=''
                            alt="..."
                            src={require("assets/img/back.jpg").default}
                        />
                        <img
                            alt="..."
                            src={require("assets/img/poster.jpg").default}
                            className="eye absolute" />
                    </div>


                    <div className="text-center md:mt-10 mt-20">
                        <h3 className="text-xl font-semibold leading-normal mb-2  text-blueGray-700 ">
                            Adjuntar Portada:
                        </h3>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <input
                                required
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
