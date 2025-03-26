"use client";
import React, { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState(items);
  const [currentSortBy, setCurrentSortBy] = useState("");

  const sortByName = () => {
    const sorted = items.toSorted((item1, item2) => {
      if (item1.name > item2.name) {
        return 1;
      } else if (item1.name === item2.name) {
        return 0;
      } else {
        return -1;
      }
    });
    setSortBy(sorted);
    setCurrentSortBy("name")
  };

  const sortByCategory = () => {
    const sorted = items.toSorted((item1, item2) => {
      if (item1.category > item2.category) {
        return 1;
      } else if (item1.category === item2.category) {
        return 0;
      } else {
        return -1;
      }
    });
    setSortBy(sorted);
    setCurrentSortBy("category");
  };

  // using conditional rendering
  const itemsToDisplay = currentSortBy ? sortBy : items;

  return (
    <div className='mt-5'>
      <label className='text-white font-bold font-mono text-xl'>Sort By: </label>
      <button className={`bg-yellow-500 border-2 border-black text-white font-bold font-mono text-xl w-28 rounded-xl mr-2 ${currentSortBy === 'name' ? 'bg-yellow-600' : ''}`} onClick={sortByName}>Name</button>
      <button className={`bg-yellow-500 border-2 border-black text-white font-bold font-mono text-xl w-28 rounded-xl ${currentSortBy === 'category' ? 'bg-yellow-600' : ''}`} onClick={sortByCategory}>Category</button>
      <div className="flex flex-col gap-5 w-1/4 ">    
        {itemsToDisplay.map((item) => (
          <ul key={item.id}>
            <li>
              <Item onSelect={() => onItemSelect(item.name)} name={item.name} quantity={item.quantity} category={item.category}/>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
