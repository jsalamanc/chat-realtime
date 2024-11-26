import Image from 'next/image';
import React from 'react';

export const StreamVideo = () => {
    return (
        <div className="col-span-2 bg-gray-900 p-4">
            <div className="relative h-full flex flex-col items-center justify-center">
                <div
                    className="bg-black w-full h-[16rem] md:h-full  rounded-lg"
                    style={{ contain: 'content' }}
                >
                    <iframe
                        className="w-full h-[80%]"
                        src="https://www.youtube.com/embed/17HknA0tBYY?si=FCTgvl1Q89I5pqQ4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <div className="bg-gray-900 p-4 h-[20%]">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white font-semibold text-lg md:text-2xl">¿Que es TailwindCSS?</h1>
                            <Image
                                src="https://www.kuepa.com/assets/ketKuepaEduTechLogo-DXJ1wnm6.png"
                                width={170}
                                height={300}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
