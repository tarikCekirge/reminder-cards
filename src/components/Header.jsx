import { usePost } from '../contexts/PostContext'
import DarkModeToggle from './DarkModeToggle'
import Results from './Results'
import SearchPosts from './SearchPosts'

const Header = () => {
    const { handleClearPosts } = usePost()
    return (
        <header className='bg-slate-500 dark:bg-slate-900 font-montserrat gap-3'>

            <nav className='container flex py-4 items-center flex-wrap md:flex-nowrap gap-4'>
                <h1 className='text-white dark:text-slate-700 font-black mr-auto'><span className='text-slate-300'>REMINDER</span>CARDS</h1>
                <div className='flex gap-3 items-center order-1 md:order-none w-full md:w-fit'>
                    <Results />
                    <SearchPosts />
                    <button onClick={handleClearPosts} className='bg-slate-800 cursor-pointer h-9 rounded-sm text-white px-2 py-2 text-sm'>Tümünü Sil</button>
                </div>
                <DarkModeToggle />
            </nav>
        </header>
    )
}

export default Header