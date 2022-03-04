import { Link } from 'react-router-dom'
import BannerUser from '../../partials/dashboard/BannerUser';
import "../../components/Cards/card.css";
import 'tw-elements';

const ManCatAudio = () => {
    const customers = [
        {
            id: '1',
            name: 'Español',
        },
        {
            id: '2',
            name: 'Ingles',
        },
        {
            id: '3',
            name: 'Portugues',
        },
    ];

    return (
        <>
            <main>
                <BannerUser />
                <div className='mt-10 lg:flex lg:justify-end'>
                    <button
                    type="button"
                    className="px-6 py-2.5 bg-sky-800 text-white text-lg uppercase rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg
                    transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Nuevo
                </button>
                </div>
                <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog relative w-auto pointer-events-none">
                        <div
                            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div
                                className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Agregue Un Nuevo Tipo de Audio</h5>
                                <button type="button"
                                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body relative p-4">
                                Modal body text goes here.
                            </div>
                            <div
                                className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg
                                transition duration-150 ease-in-out" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="px-6 py-2.5 bg-green-600 text-white font-medium
                                text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
                    <div className="p-3">
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="table-auto w-2/6">
                                {/* Table header */}
                                <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Id</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Nombre</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Acciones</div>
                                        </th>
                                    </tr>
                                </thead>
                                {/* Table body */}
                                <tbody className="text-sm divide-y divide-slate-100">
                                    {
                                        customers.map(customer => {
                                            return (
                                                <tr className='' key={customer.id}>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="flex items-center">

                                                            <div className="font-medium text-slate-800">{customer.id}</div>
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">{customer.name}</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-green-500">{customer.tipo}</div>
                                                    </td>
                                                    <td className="">
                                                        <Link className='text-center bg-green-600 p-3 text-white font-bold hover:bg-green-700 w-16' to="">Editar</Link>
                                                        <Link className='text-center bg-red-600 p-3 text-white font-bold hover:bg-red-700 w-24' to="">Eliminar</Link>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

export default ManCatAudio