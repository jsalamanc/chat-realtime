import React from 'react';

export const CardMessage = ({ username, message, typeUser }) => {
    return (
        <div className="py-2 flex items-center justify-between gap-4 transition hover:bg-gray-800">
            <div className='flex items-center'>
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
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
                        className="lucide lucide-user"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-bold">{username}</p>
                    <p className="text-sm text-gray-400">{message}</p>
                </div>
            </div>
            <div>
                <p className='text-sm p-2 rounded-full bg-gray-700'>{typeUser}</p>
            </div>
        </div>
    );
};
