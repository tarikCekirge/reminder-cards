import { usePost } from "../contexts/PostContext"

const SearchPosts = () => {

    const { state, setSearchQuery } = usePost();

    return (
        <input className="border border-slate-800 text-sm h-9 p-1 rounded-sm text-slate-300 focus:outline-none flex-1"
            value={state.searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Arama..."
        />
    )
}

export default SearchPosts