'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LucideIcon } from 'lucide-react'

type Props = {
    children: React.ReactNode,
    href: string,
    icon: LucideIcon,
    path:string
}

function ActiveLink({ children, href, icon: Icon }: Props) {
    const pathname = usePathname()
    const isActive = pathname === href ? 'bg-blue-500 text-white ' : 'text-black'
    
    return (
        <Link href={href} className="flex items-center gap-2">
            <div className={cn(`w-full px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-500 transition `, isActive)}>
                <Icon className="w-5 h-5" /> 
                {children}
            </div>
        </Link>
    )
}

export default ActiveLink
