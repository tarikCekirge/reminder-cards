import { createContext, useContext, useReducer, useLayoutEffect } from 'react';
import { faker } from '@faker-js/faker';

function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

const getInitialDarkMode = () => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches || false;
};



const initialState = {
    posts: Array.from({ length: 50 }, () => createRandomPost()),
    archivePosts: Array.from({ length: 50 }, () => createRandomPost()),
    searchQuery: "",
    isDarkMode: getInitialDarkMode(),
    showArchive: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_POST":
            return { ...state, posts: [action.payload, ...state.posts] };
        case "CLEAR_POSTS":
            return { ...state, posts: [] };
        case "SET_SEARCH_QUERY":
            return { ...state, searchQuery: action.payload };
        case "TOGGLE_DARK_MODE":
            return { ...state, isDarkMode: !state.isDarkMode };
        case "TOGGLE_ARCHIVE":
            return { ...state, showArchive: !state.showArchive };
        default:
            return state;
    }
}

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useLayoutEffect(() => {
        const isDark = state.isDarkMode;
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("darkMode", JSON.stringify(isDark));
    }, [state.isDarkMode]);

    const handleAddPost = (post) => {
        dispatch({ type: 'ADD_POST', payload: post });
    };

    const handleClearPosts = () => {
        dispatch({ type: 'CLEAR_POSTS' });
    };

    const setSearchQuery = (query) => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    };

    const toggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };

    const toggleArchive = () => {
        dispatch({ type: 'TOGGLE_ARCHIVE' });
    };

    const values = {
        state,
        handleAddPost,
        handleClearPosts,
        setSearchQuery,
        toggleDarkMode,
        toggleArchive,
    };

    return (
        <PostContext.Provider value={values}>
            {children}
        </PostContext.Provider>
    );
};

export const usePost = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('usePost must be used within a PostProvider');
    }
    return context;
};
