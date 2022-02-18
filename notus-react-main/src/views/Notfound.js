function fail404() {
    return (
        <>
            <div class="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-sky-800 to-sky-400
            ">
                <div class="px-40 py-20 bg-white rounded-md shadow-xl">
                    <div class="flex flex-col items-center">
                        <h1 class="font-bold text-sky-600  text-9xl">404</h1>
                        <h6 class="mb-2 text-2xl font-bold text-center text-black md:text-3xl">
                            <span class="text-sky-900">Oops!</span> Página no encontrada
                        </h6>
                        <p class="mb-8 text-center text-gray-500 md:text-lg">
                            La página que buscas no existe.
                        </p>
                        <a
                            href="/"
                            class="px-6 py-2 text-sm font-semibold text-sky-800 bg-blue-100"
                        >Ir a inicio</a
                        >
                    </div>
                </div>
            </div>
        </>
    )
}

export default fail404