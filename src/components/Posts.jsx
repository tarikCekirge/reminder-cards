import React from 'react'
import { usePost } from '../contexts/PostContext';
import Card from './Card';

const Posts = () => {
    const { state } = usePost();


    const posts =
        state.searchQuery.length > 0
            ? state.posts.filter((post) =>
                `${post.title} ${post.body}`.toLowerCase().includes(state.searchQuery.toLowerCase())
            )
            : state.posts;

    if (posts.length === 0) return <p className='font-medium'>Yazı Bulunamadı.</p>
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {posts.map((post, i) => <Card key={i} title={post.title} body={post.body} />)}
        </div>
    )
}

export default Posts