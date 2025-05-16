import React, { useMemo } from 'react';
import { usePost } from '../contexts/PostContext';
import Card from './Card';

const Posts = () => {
    const { state: { posts, searchQuery } } = usePost();

    const filteredPosts = useMemo(() => {
        if (!searchQuery) return posts;
        const lowerSearch = searchQuery.toLowerCase();
        return posts.filter(post =>
            `${post.title} ${post.body}`.toLowerCase().includes(lowerSearch)
        );
    }, [posts, searchQuery]);

    if (filteredPosts.length === 0) {
        return <p className='font-medium'>Yazı Bulunamadı.</p>;
    }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {filteredPosts.map((post, index) => (
                <Card key={index} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default Posts;
