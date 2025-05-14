import React from 'react'
import Posts from './Posts'
import AddReminder from './AddReminder'

const Main = () => {
    return (
        <section className='container py-4'>
            <AddReminder />
            <Posts />
        </section>
    )
}

export default Main