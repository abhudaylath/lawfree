import React from 'react'
import Sidebar from './_components/sidebar';
import Header from './_components/header';

function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='bg-slate-100 min-h-screen'>
            <div>
                <Sidebar />
            </div>
            <div className='md:ml-64'>
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default layout