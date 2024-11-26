"use client";

import React, { useEffect, useState } from 'react';
import { CardMessage } from './CardMessage';
import socket from '@/lib/socket';
export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        // Escuchar mensajes del servidor
        socket.on("message", (message) => {
            console.log('message', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Limpiar eventos al desmontar el componente
        return () => {
            socket.off("message");
        };
    }, []);

    const sendMessage = () => {
        socket.emit("message", input);
        setInput("");
    };
    return (
        <div className="bg-gray-900 p-4">
            <div className="">
                <div className="rounded-t-md p-2 bg-gray-700 text-white font-semibold">
                    Mensajes de los Estudiantes:
                </div>
                <div className='h-[80vh] overflow-y-auto'>
                    <CardMessage />
                </div>
                <div className="relative w-full border border-gray-700 rounded-lg bg-[#182125] flex">
                    <input
                        className="p-2 w-full outline-none bg-transparent text-white text-sm"
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Escribe tu comentario'
                    />
                    <button className="my-2 ml-2 mr-2 p-2 border border-whte rounded-lg bg-white text-gray-800 flex items-center justify-center w-10 h-10" onClick={sendMessage}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-send"
                        >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
