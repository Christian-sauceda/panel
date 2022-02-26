import React from "react";
import "./card.css";

// components

export default function CardListSerieEs() {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">

                    <div className="text-center mt-12">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                            Dark
                        </h3>
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <div className="relative w-full mb-3">
                                <table className="w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th
                                                className="border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                            >
                                                Título
                                            </th>
                                            <th
                                                className="border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                            >
                                                Temporada
                                            </th>
                                            <th
                                                className="border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                            >
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="pl-0"
                                        >
                                            <th
                                                className="text-left"
                                            >
                                                Capítulo 1x1
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                Temporada 1
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                <input type="submit"
                                                    value="Editar"
                                                    className="edit"
                                                    href="/admin"
                                                />
                                                <input type="submit"
                                                    value="Eliminar"
                                                    className="delete mx-1"
                                                    href="/admin"
                                                />
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-left"
                                            >
                                                Capítulo 1x2
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                Temporada 1
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                <input type="submit"
                                                    value="Editar"
                                                    className="edit"
                                                    href="/admin"
                                                />
                                                <input type="submit"
                                                    value="Eliminar"
                                                    className="delete mx-1"
                                                    href="/admin"
                                                />
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-left"
                                            >
                                                Capítulo 1x3
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                Temporada 1
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                <input type="submit"
                                                    value="Editar"
                                                    className="edit"
                                                    href="/admin"
                                                />
                                                <input type="submit"
                                                    value="Eliminar"
                                                    className="delete mx-1"
                                                    href="/admin"
                                                />
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-left"
                                            >
                                                Capítulo 2x1
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                Temporada 2
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                <input type="submit"
                                                    value="Editar"
                                                    className="edit"
                                                    href="/admin"
                                                />
                                                <input type="submit"
                                                    value="Eliminar"
                                                    className="delete mx-1"
                                                    href="/admin"
                                                />
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-left"
                                            >
                                                Capítulo 2x2
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                Temporada 2
                                            </th>
                                            <th
                                                className="text-left"
                                            >
                                                <input type="submit"
                                                    value="Editar"
                                                    className="edit"
                                                    href="/admin"
                                                />
                                                <input type="submit"
                                                    value="Eliminar"
                                                    className="delete mx-1"
                                                    href="/admin"
                                                />
                                            </th>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
