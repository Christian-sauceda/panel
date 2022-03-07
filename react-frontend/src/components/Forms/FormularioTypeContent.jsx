import { useState, useEffect } from 'react'
import Alerta from '../Alerts/Alerts';
import useCatContenido from '../../hooks/useContenido';

const FormularioTypeContent = () => {
    const [NAME_TYPE_CONTENT, setNAME_TYPE_CONTENT] = useState('');
    const [COD_TYPE_CONTENT, setCOD_TYPE_CONTENT] = useState(null);
    const [alerta, setAlerta] = useState({});

    const { guardarCatContenido, catcontent } = useCatContenido();

    useEffect(() => {
        if (catcontent?.NAME_TYPE_CONTENT) {
            setNAME_TYPE_CONTENT(catcontent.NAME_TYPE_CONTENT)
            setCOD_TYPE_CONTENT(catcontent.COD_TYPE_CONTENT) // para editar
        } else {
            setNAME_TYPE_CONTENT('');
        }

    }, [catcontent])

    const handleSubmit = (e) => {
        e.preventDefault();
        //validar
        if ([NAME_TYPE_CONTENT].includes('')) {
            setAlerta({
                msg: 'El Nombre del Tipo de Contenido es obligatorio',
                error: true
            })
            return;
        }

        guardarCatContenido({ NAME_TYPE_CONTENT, COD_TYPE_CONTENT })
        setAlerta({
            msg: 'Guardado Correctamente',
            error: false
        })
        setNAME_TYPE_CONTENT('');
        setCOD_TYPE_CONTENT('');

    }
    const { msg } = alerta;
    return (
        <>
            { msg && <Alerta alerta={alerta} /> }
            <form
                onSubmit={handleSubmit}
                className='bg-white py-10 px-1 mb-10 lg:mb-0 shadow-md rounded-md'
            >
                <div className='mb-5'>
                    <label
                        htmlFor='nombre'
                        className='block text-gray-700 uppercase font-bold'>
                        Nombre:
                    </label>
                    <input
                        type='text'
                        id='nombre'
                        placeholder='Escribe el Nombre del Tipo'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-600
                    rounded-md'
                        value={NAME_TYPE_CONTENT}
                        onChange={e => setNAME_TYPE_CONTENT(e.target.value)}
                    />
                </div>
                <input
                    type='submit'
                    className='bg-blue-600 w-full p-3 px-2 rounded-xl mt-1 text-white uppercase font-bold hover:cursor-pointer text-center hover:bg-blue-800 cursor-pointer transition-colors'
                    value={COD_TYPE_CONTENT ? 'Guardar Cambios' : 'Agregar'}
                />
            </form>
        </>
    )
}

export default FormularioTypeContent