import { useState } from 'react';
import BannerCatContent from '../../partials/dashboard/BannerCatContent';

//components
import FormularioTypeContent from '../../components/Forms/FormularioTypeContent';
import ListadoTypeContent from '../../components/List/ListadoTypeContent';

const ManCatAudio = () => {

    const [mostrarForm, setMostrarForm] = useState(false);

    return (
        <>
            <main>
                <BannerCatContent />
                <main className="container mx-auto md:grid md:grid-cols-2 mt-24 gap-10 p-5 items-center">
                    <button
                        type='button'
                        className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden'
                        onClick={() => setMostrarForm(!mostrarForm)}
                    >{mostrarForm ? 'OCultar Formulario' : 'Mostrar formulario'}</button>
                    <div className={`${mostrarForm ? 'block' : 'hidden'} md:block`} >
                        <FormularioTypeContent />
                    </div>
                    <div>
                        <ListadoTypeContent />
                    </div>
                </main>
            </main>
        </>
    )
}

export default ManCatAudio