
import { useState, useEffect } from 'react';
import Alerta from '../Alerts/Alerts';
import useCategorias from '../../hooks/useCategorias'

const FormularioCategoria = () => {
    const [CATEGORIA, setCATEGORIA] = useState('')
    const [COD_CONTENIDO, setCOD_CONTENIDO] = useState('')
    const [id, setId] = useState(null)
    const [alerta, setAlerta] = useState({})

    const { guardarCategoria, categoria } = useCategorias()

    useEffect(() =>{
        if(categoria?.CATEGORIA){
            setCATEGORIA(categoria.CATEGORIA)
            setCOD_CONTENIDO(categoria.COD_CONTENIDO)
            setId(categoria.COD_CATEGORIA)
        }
    }, [categoria])

    const handleSubmit = e => {
        e.preventDefault();
        //validar
        if ([CATEGORIA, COD_CONTENIDO].includes('')) {
            setAlerta({
                msg: 'Todos Los campos es obligatorio',
                error: true
            })
            return
        }

        
        guardarCategoria({ CATEGORIA, COD_CONTENIDO, id})
        setAlerta({
            msg: 'Tipo Categoria guardada',
            error: false
        })
        setCATEGORIA('')
        setCOD_CONTENIDO('')
        setId('')
    }
    const { msg } = alerta;
    return (
        <>
            {msg && < Alerta alerta={alerta} />}
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
                        value={CATEGORIA}
                        onChange={e => setCATEGORIA(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label
                    htmlFor='tipo'
                    className='block text-gray-700 uppercase font-bold'>
                        Tipo de Contenido:
                    </label>
                    <select
                        id='tipo'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-600
                    rounded-md'
                        value={COD_CONTENIDO}
                        onChange={e => setCOD_CONTENIDO(e.target.value)}
                    >
                        <option value=''>Seleccione un Tipo de Contenido</option>
                        <option value='1'>PELICULAS</option>
                        <option value='2'>MOVIES</option>
                        <option value='3'>SERIES</option>
                        <option value='4'>TV SHOWS</option>
                    </select>
                </div>
                <input
                    type='submit'
                    className='bg-blue-600 w-full p-3 px-2 rounded-xl mt-1 text-white uppercase font-bold hover:cursor-pointer text-center hover:bg-blue-800 cursor-pointer transition-colors'
                    value={id ? 'Guardar Cambios' : 'Agregar Categoria'}
                />
            </form>
        </>
    )
}

export default FormularioCategoria