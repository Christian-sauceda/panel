import { Outlet } from "react-router-dom";

const Authlayout = () => {
    return (
        <>
            <main className="container mx-auto md:grid md:grid-cols-2 mt-16 gap-20 p-5 items-center">
                <Outlet />

            </main>
        </>
    )
};

export default Authlayout