import { Item } from "./Item"

export function ItemList({ items, toggleItem, deleteItem }) {
    return <ul className="list">
        {items.length === 0 && "No items to display, don't be shy, add something!"}
        {items.map(item => {
            return (
                <Item
                    {...item}
                    key={item.id}
                    toggleItem={toggleItem}
                    deleteItem={deleteItem}
                />
            )
        })}
    </ul>
}