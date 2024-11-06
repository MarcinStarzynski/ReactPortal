export function Item({ completed, id, title, toggleItem, deleteItem }) {
    return <li>
        <label>
            <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleItem(id, e.target.checked)}
            />
            {title}
        </label>
        <button
            className="btn btn-danger"
            onClick={() => deleteItem(id)}
        >Delete</button>
    </li>
}