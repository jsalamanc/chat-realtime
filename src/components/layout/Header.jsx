"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MenuDesktop } from './MenuDesktop';
import { useAppSelector } from '@/lib/context/store';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const user = useAppSelector((state) => state?.reducers?.UserSession?.user?.data)
    const handleClick = () => setOpenMenu(!openMenu);
    return (
        <header className="p-5 bg-black">
            <div className='container  flex items-center justify-between'>
                <Image
                    src="https://www.kuepa.com/icons/kuepaWhiteLogo.svg"
                    alt="logo kuepa"
                    height={30}
                    width={100}
                />
                <nav className="flex items-center gap-4 [&>div>li]:list-none">
                    <div className="hidden md:flex gap-4">
                        <li>
                            <span className="text-white cursor-pointer">Clases</span>
                        </li>
                        <li>
                            <span className="text-white cursor-pointer">Calendario</span>
                        </li>
                    </div>
                    <li className="relative flex items-center">
                        <div className="w-10 h-10 rounded-full bg-white cursor-pointer" onClick={handleClick} />
                        {openMenu && <MenuDesktop nameUser={user?.name} />}
                    </li>
                </nav>
            </div>
        </header>
    );
};
