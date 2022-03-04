import React, { useState, Navigate } from 'react';
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
//components

import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Header from "../components//Headers/Header.jsx";


//importar css
import "./AuthLayout.css";
const AdminLayout = () => {
    const { auth, cargando } = useAuth()
    const [sidebarOpen, setSidebarOpen] = useState(false);
    console.log(auth)
    console.log(cargando)
    if (cargando) return 'cargando...'
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main>
                        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminLayout;