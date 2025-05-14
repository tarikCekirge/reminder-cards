import { usePost } from "../contexts/PostContext";

const DarkModeToggle = () => {
    const { state, toggleDarkMode } = usePost();

    return (
        <button
            onClick={toggleDarkMode}
            className="text-xl px-3 py-1 rounded-md transition-colors duration-300 bg-slate-200 dark:bg-slate-800 text-black dark:text-white"
        >
            {state.isDarkMode ? "☀️" : "🌙"}
        </button>
    );
};

export default DarkModeToggle;
