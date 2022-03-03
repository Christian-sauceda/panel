import React from "react";
import PropTypes from "prop-types";

// components

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-sky-800 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-700" : "text-white")
                }
              >
                Listado de Tv Español en vivo
              </h3>
            </div>

          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-sky-800 text-sky-800 border-sky-800")
                  }
                >
                  Título
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                >
                  Tipo
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                >
                  Categoria
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                >
                  Fecha
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                >
                  Acciones
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-50 text-gray-500 border-gray-100"
                      : "bg-sky-800 text-sky-300 border-sky-700")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  className="text-left px-6"
                >
                  3ABN Latino | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  A&E | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  ADN 40 | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  AFIZZIONADOS | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  ALIENTO VISION | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  AMERICA TV | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  ANIMAL PLANET | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  ANTENA 3 | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  ANTENA 3 | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  beIN Sports 1| FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
              <tr>
                <th
                  className="text-left px-6"
                >
                  beINSport LaLiga | FHD
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  TV en Español
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  Añadido recientemente
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  26/07/2021
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                  <input type="submit"
                    value="Editar"
                    className="edit"
                    href="/admin"
                  />
                  <input type="submit"
                    value="Desactivar"
                    className="desactivar mx-1"
                    href="/admin"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
