import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // setItems((items) => [...items, newItem]);
    onAddItems(newItem);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center bg-slate-600 space-x-2 p-4 mx-4">
        <h1 className="text-base text-white">
          What do your need for your trip?
        </h1>
        <>
          <select
            name="quantity"
            id=""
            className="bg-gray-100 mx-auto rounded-md hover:bg-gray-300 outline-none"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>

          <input
            type="text"
            className="bg-pink-200 text-green-700 px-2 py-1 rounded-sm  focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            placeholder="Enter Item"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md mx-auto p-1">
            Add
          </button>
        </>
      </div>
    </form>
  );
};

export default Form;
