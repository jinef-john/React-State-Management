import { useState } from "react";
import Card from "./components/Card.jsx";
import States from "./components/States.jsx";
import CounterQuiz from "./components/CounterQuiz.jsx";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Shoes", quantity: 3, packed: true },
    { id: 4, description: "SnowBoard", quantity: 1, packed: true },
    { id: 5, description: "Hat", quantity: 2, packed: false },
    { id: 6, description: "Ps Pads", quantity: 4, packed: true },
  ];

  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(`deleting ${id}`);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?"))
      setItems([]);
  }

  return (
    <>
      <Card />
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
      <States />
      <CounterQuiz />
    </>
  );
}

export default App;
