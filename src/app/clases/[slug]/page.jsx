'use client';

import { Chat } from '@/components/ui/Chat'
import { StreamVideo } from '@/components/ui/StreamVideo'
import React from 'react'
import { useParams } from "next/navigation";
import { fetcher } from '@/hook/fetcher';
import useSWR from 'swr';

const Page = (props) => {
    const { slug } = useParams();
    const { data, isLoading, error } = useSWR(`/api/clases/${slug}`, fetcher);
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 h-screen">
            <StreamVideo videoIframe={data?.video} />
            <Chat />
        </section>
    )
}

export default Page