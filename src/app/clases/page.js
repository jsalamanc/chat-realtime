'use client';

import { CardClass } from '@/components/ui/CardClass';
import { fetcher } from '@/hook/fetcher';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const Page = () => {
    const { data, isLoading, error } = useSWR('/api/clases', fetcher);
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <div className="container">
            <h1 className="my-4 text-2xl font-medium">Clases disponibles</h1>
            <div className="flex gap-4">
                {data?.length > 0 ? (
                    <>
                        {data?.map((classGroup, index) => (
                            <Link key={index} href={`/clases/${classGroup?.slug}`}>
                                <CardClass
                                    thumbnail={classGroup?.thumbnail}
                                    title={classGroup?.title}
                                    description={classGroup?.description}
                                />
                            </Link>
                        ))}
                    </>
                ) : (
                    <p className='text-center font-medium'>No hay clase disponibles</p>
                )}
            </div>
        </div>
    );
};

export default Page;
