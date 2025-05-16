import { useMemo } from 'react';
import { usePost } from '../contexts/PostContext';
import ListItem from './ListItem';

const Archive = () => {
    const {
        state: { archivePosts, showArchive },
        handleAddPost,
        toggleArchive
    } = usePost();

    const archiveList = useMemo(() => {
        if (!showArchive) return null;

        return (
            <ul className='my-4'>
                {archivePosts.map((post, index) => (
                    <ListItem key={index} post={post} onAdd={handleAddPost} />
                ))}
            </ul>
        );
    }, [archivePosts, showArchive, handleAddPost]);

    return (
        <aside className='my-6'>
            <h2 className='font-montserrat text-xl font-bold text-slate-800 dark:text-slate-300 uppercase pb-4'>
                Arşiv
            </h2>

            <button
                onClick={toggleArchive}
                className='bg-slate-800 cursor-pointer h-9 rounded-sm text-white px-2 py-2 text-sm'
            >
                {showArchive ? "Arşivi gizle" : "Arşivi göster"}
            </button>

            {archiveList}
        </aside>
    );
};

export default Archive;
