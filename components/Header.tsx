'use client';

import React from 'react'
import Image from 'next/image'
import logo from "../public/header-logo.png"
import Link from 'next/link'
import { link } from 'fs/promises';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
        <div className='main-container inner'>
            <Link className='text-indigo-500 flex items-center ' href="#">
                <Image src={logo} alt='Nexora logo' className='block h-15 w-auto  translate-y-2' />
                <p className='text-2xl font-bold text-indigo-500'>Nexora</p>
            </Link>
            <nav>
                <Link href='/' className={cn('nav-link', {
                    'is-active': pathname === '/',
                    'is-home': true
                })}>Home</Link>
                <Link href="#" className='text-gray-300 hover:text-indigo-500 mx-4'>Search</Link>
                <Link href="/coins"className={cn('nav-link', {
                    'is-active': pathname === '/coins'
                })}>Tokens</Link>
            </nav>
        </div>
    </header> 
  )
}

export default Header