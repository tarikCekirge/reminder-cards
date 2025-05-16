import React from 'react';
import Posts from './Posts';
import AddReminder from './AddReminder';
import Archive from './Archive';

const Main = () => {
    return (
        <main className='container py-4 flex-1'>
            <AddReminder />
            <Posts />
            <Archive />
        </main>
    );
};

export default React.memo(Main);
