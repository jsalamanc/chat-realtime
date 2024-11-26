import { Chat } from '@/components/ui/Chat'
import { StreamVideo } from '@/components/ui/StreamVideo'
import React from 'react'

const page = (props) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 h-screen">
            <StreamVideo />
            <Chat />
        </section>
    )
}

export default page