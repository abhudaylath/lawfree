"use client"
import React, { useState } from 'react'
import Sidebar from './_components/sidebar';
import Header from './_components/header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';

function Layout({ children }: { children: React.ReactNode }) {
    const [totalUsage, setTotalUsage] = useState<number>(0);

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
            <div className="bg-slate-100 min-h-screen flex">
                <Sidebar />
                <div className="flex-1 md:ml-64">
                    <Header />
                    {children}
                </div>
            </div>
        </TotalUsageContext.Provider>
    )
}

export default Layout;
