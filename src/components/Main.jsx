import React from 'react'
import Posts from './Posts'
import AddReminder from './AddReminder'

const Main = () => {
    return (
        <main className='container py-4 flex-1'>
            <AddReminder />
            <Posts />
        </main>
    )
}

export default Main