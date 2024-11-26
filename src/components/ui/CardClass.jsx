import React from 'react';

export const CardClass = ({
    thumbnail,
    title,
    description,
}) => {
    return (
        <article className='max-w-[30rem] border rounded-lg border-gray-300 shadow-md' style={{ contain: 'content' }}>
            <div
                className='h-[15rem] w-full bg-no-repeat bg-cover bg-center'
                style={{ backgroundImage: `url(${thumbnail})` }}
            >
            </div>
            <div className='p-5 bg-gray-900'>
                <h2 className='font-bold text-md text-gray-300'>{title}</h2>
                <p className='mt-2 text-gray-300'>{description}</p>
            </div>
        </article>
    );
};