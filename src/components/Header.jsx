import { usePost } from '../contexts/PostContext'
import Results from './Results'
import SearchPosts from './SearchPosts'

const Header = () => {
    const { handleClearPosts } = usePost()
    return (
        <header className='bg-slate-500 font-montserrat gap-3'>
            <nav className='container flex py-4 items-center'>
                <h1 className='text-white font-black mr-auto'><span className='text-slate-300'>REMINDER</span>CARDS</h1>
                <div className='flex gap-3 items-center'>
                    <Results />
                    <SearchPosts />
                    <button onClick={handleClearPosts} className='bg-slate-800 cursor-pointer h-9 rounded-sm text-white px-2 py-2 text-sm'>Temizle</button>
                </div>
            </nav>
        </header>
    )
}

export default Header