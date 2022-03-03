import React from "react";

const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'bg-red-600' : 'bg-sky-800'} text-white pt-2 pb-2 px-2 justify-center mb-6 text-center font-bold uppercase text-sm`}>
            {alerta.msg}
        </div>
    );
}

export default Alerta;