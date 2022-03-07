import { useState } from 'react';
import BannerCatContent from '../../../partials/dashboard/BannerCatContent';

//components
import FormularioTypeContent from '../../../components/Forms/FormularioTypeContent';
import ListadoTypeContent from '../../../components/List/ListadoTypeContent';

const ManCatAudio = () => {
    const [mostrarForm, setMostrarForm] = useState(false);
    return (
        <>
            <BannerCatContent />
            <main className="container mx-auto md:grid md:grid-cols-2 mt-0 gap-0 p-2">
                <button
                    type='button'
                    className='bg-indigo-600 text-white uppercase font-bold mx-10 p-3 rounded-md mb-10 md:hidden'
                    onClick={() => setMostrarForm(!mostrarForm)}
                >{mostrarForm ? 'Ocultar Formulario' : 'mostrar Formulario' }</button>
                <div 
                className={`${mostrarForm ? 'block' : 'hidden' } md:block md:w-1/2 lg:w-4/5`}
                >
                <FormularioTypeContent />
                </div>
                <div className='md:w-1/2 lg:w-4/5'>
                    <ListadoTypeContent />
                </div>
            </main>
        </>
    )
}

export default ManCatAudio