"use client"
import Link from 'next/link'
import React from 'react'
import ActiveLink from './active-link'
import { History, HomeIcon, ReceiptIndianRupee, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'

export interface MenuItem {
    id: string,
    href: string,
    title: string
}

function Sidebar() {

    const path = usePathname();
    console.log(typeof path);
    
    return (
        <div className="hidden md:flex flex-col z-10 w-64 bg-white text-white fixed top-0 left-0 h-screen overflow-auto p-4">
            <h1 className='text-2xl pl-4 pt-4 text-black'>
                <Link href="/">LawFree</Link>
            </h1>
            <hr className='mt-5 border'/>
            <div className="flex flex-col justify-between h-full">
                <ul className='w-full pt-8 space-y-2 flex flex-col'>
                    <li>
                        <ActiveLink href='/dashboard' icon={HomeIcon} path={path}>
                            Home
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href='/dashboard/history' icon={History} path={path}>
                            History
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href='/dashboard/billing' icon={ReceiptIndianRupee} path={path}>
                            Billing
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href='/dashboard/settings' icon={Settings} path={path}>
                            Settings
                        </ActiveLink>
                    </li>
                </ul>


            </div>
            
            <div className="p-4 text-center text-gray-500 text-sm border-t border-gray-200">
                &copy; {new Date().getFullYear()} LawFree. All rights reserved.
            </div>
        </div>
    )
}

export default Sidebar