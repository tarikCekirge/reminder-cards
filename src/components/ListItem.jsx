import React from 'react';

const ListItem = React.memo(({ post, onAdd }) => {
    return (
        <li className='border p-2 border-slate-300 dark:border-slate-600'>
            <p className='dark:text-slate-400 text-sm'>
                <strong className='font-montserrat font-bold text-slate-800 dark:text-slate-300 uppercase'>
                    {post.title}:
                </strong> {post.body}
            </p>
            <button
                onClick={() => onAdd(post)}
                className='text-xs text-blue-500 mt-1'
            >
                Yeni Notlara Ekle
            </button>
        </li>
    );
}, (prevProps, nextProps) => {
    return prevProps.post === nextProps.post &&
        prevProps.onAdd === nextProps.onAdd;
});

export default ListItem;
