import React from 'react'
import { signOut } from "next-auth/react";

export const MenuDesktop = ({ nameUser }) => {
    return (
        <div className="absolute right-[0rem] bottom-[-15.7rem] w-[13rem] p-4 rounded-md bg-[#1a1a1a]">
            <div className="p-2 rounded-md border border-orange-500 mb-2 select-none cursor-pointer">
                <span className="font-semibold">Clase Actual</span>
                <div className='mt-2 flex gap-2 w-full'>
                    <div className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-tv-minimal"
                        >
                            <path d="M7 21h10" />
                            <rect width="20" height="14" x="2" y="3" rx="2" />
                        </svg>
                    </div>
                    <div><p className='font-medium'>¿Que es TailwindCSS?</p></div>
                </div>
            </div>
            <div className="py-2 border-y-2 border-gray-500">
                <p className="mb-2">!Hola, {nameUser}!</p>
                <span className="cursor-pointer font-bold">Ver mi Perfil</span>
            </div>
            <button className="mt-2 font-bold" onClick={() => signOut()}>Cerrar sesión</button>
        </div>
    )
}
