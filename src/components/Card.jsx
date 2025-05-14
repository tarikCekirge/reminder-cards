
const Card = ({ title, body }) => {
    return (
        <article className="bg-slate-50 dark:bg-slate-800 px-4 py-3 rounded-sm">
            <h6 className="font-montserrat text-lgl font-bold text-slate-800 dark:text-slate-300 uppercase">{title}</h6>
            <p className="dark:text-slate-400">{body}</p>
        </article>
    )
}

export default Card