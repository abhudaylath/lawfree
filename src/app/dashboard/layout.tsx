import React from 'react'
import Sidebar from './_components/sidebar';
import Header from './_components/header';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div className='md:ml-64 bg-slate-100 h-screen'>
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default layout