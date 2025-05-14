import { usePost } from "../contexts/PostContext";

const Results = () => {
    const { state } = usePost();

    const searchedPosts =
        state.searchQuery.length > 0
            ? state.posts.filter((post) =>
                `${post.title} ${post.body}`.toLowerCase().includes(state.searchQuery.toLowerCase())
            )
            : state.posts;

    return <p className="text-sm font-semibold dark:text-slate-500">🚀 {searchedPosts.length} Post</p>;
}

export default Results