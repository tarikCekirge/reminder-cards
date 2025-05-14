
const Card = ({ title, body }) => {
    return (
        <article className="bg-slate-50 px-4 py-3 rounded-sm">
            <h6 className="font-montserrat text-lgl font-bold text-slate-800 uppercase">{title}</h6>
            <p>{body}</p>
        </article>
    )
}

export default Card