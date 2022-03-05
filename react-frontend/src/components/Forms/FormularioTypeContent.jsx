import { useState } from 'react'
import Alerta from '../Alerts/Alerts';
import useCatContent from '../../hooks/useTypeContent';

const FormularioTypeContent = () => {

    const [NAME_TYPE_CONTENT, setNAME_TYPE_CONTENT] = useState('');

    const [alerta, setAlerta] = useState({});

    const { CatContent } = useCatContent();
    console.log(CatContent);
    const handleSubmit = e => {
        e.preventDefault();
        //validar formulario
        if([NAME_TYPE_CONTENT].includes('')) {
            setAlerta({
                msg: 'El campo Nombre de Tipo de Contenido es obligatorio',
                error: true
            })
            return;
        }

    }
    const { msg } = alerta;
    return (
        <>
        {msg && <Alerta alerta={alerta} />}
            <form
            onSubmit={handleSubmit}
            >
                <div className="flex flex-wrap">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        for="tipo"
                                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    >
                                        Tipo:
                                    </label>
                                    <input
                                        type="text"
                                        id="tipo"
                                        name="tipo"
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        placeholder="Nombre del  Tipo de Contenido"
                                        value={NAME_TYPE_CONTENT}
                                        onChange={(e) => setNAME_TYPE_CONTENT(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                    </div>
                </div>
                <div className="">
                    <input type="submit"
                        value="añadir"
                        className="cla"
                        to="#"
                    />
                </div>
            </form>
        </>

    )
}

export default FormularioTypeContent