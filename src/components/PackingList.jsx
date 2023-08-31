import React, { useState } from "react";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("all");

  let sortedItems = [...items];

  if (sortBy === "packed") {
    sortedItems = sortedItems.filter((item) => item.packed);
  } else if (sortBy === "unpacked") {
    sortedItems = sortedItems.filter((item) => !item.packed);
  } else if (sortBy === "Ascending") {
    sortedItems = sortedItems.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }

  return (
    <div className="bg-slate-500 mx-4 p-4 h-96 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {sortedItems.map((item) => (
          <p
            className={`text-white space-x-2 ${
              item.packed ? "line-through" : ""
            }`}
            key={item.id}
          >
            <input
              className="accent-pink-500"
              type="checkbox"
              value={item.packed}
              onChange={() => onToggleItem(item.id)}
            />
            <span>{item.quantity}</span>
            <span>{item.description}</span>
            <button
              className="p-1 mx-1 text-bold text-xl hover:text-rose-600"
              onClick={() => onDeleteItem(item.id)}
            >
              &times;
            </button>
          </p>
        ))}
      </div>
      {/* Place items at bottom..If no items we disable the buttons so user cant click */}
      <div className="mt-auto mx-auto space-x-4">
        <select
          name="sort"
          id=""
          className={`bg-gray-100 mx-auto rounded-md hover:bg-gray-300 outline-none ring-2 ring-purple-500/20 ${
            items.length === 0 ? "pointer-events-none" : ""
          }`}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="all">All</option>
          <option value="packed">Packed</option>
          <option value="unpacked">Unpacked</option>
          <option value="Ascending">Description</option>
        </select>

        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white rounded-md mx-auto p-1 ring-2 ring-purple-500/20 ${
            items.length === 0 ? "pointer-events-none bg-red-950" : ""
          }`}
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackingList;
