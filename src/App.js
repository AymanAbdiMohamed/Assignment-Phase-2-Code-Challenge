import React, { useState } from "react";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
  ]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (!newItem) return;
    setItems([...items, { id: items.length + 1, name: newItem }]);
    setNewItem("");
  };

  return (
    <div>
      <h1>Phase 2 Code Challenge</h1>
      <Counter count={count} onIncrement={() => setCount(count + 1)} />

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>

      <ItemList items={items} />
    </div>
  );
}

export default App;
