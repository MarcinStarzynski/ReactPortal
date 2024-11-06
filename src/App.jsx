import { useEffect, useState } from "react"
import "./styles.css"
import { NewItemForm } from "./components/NewItemForm"
import { ItemList } from "./components/ItemList"

export default function App() {
  const [items, setItems] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items))
  }, [items])

  function addItem(title) {
    setItems(currentItems => {
      return [
        ...currentItems,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleCheck(id, completed) {
    setItems(currentItems => {
      return currentItems.map(item => {
        if (item.id === id) {
          return { ...item, completed }
        }

        return item
      })
    })
  }

  function deleteItem(id) {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }

  return (
    <>
      <NewItemForm onSubmit={addItem} />
      <h1 className="header">Todo List</h1>
      <ItemList
        items={items}
        toggleItem={toggleCheck}
        deleteItem={deleteItem}
      />
    </>
  )
}