"use client";
import React, { useState } from "react";
import items from "./items.json";
import Item from "./item.js";

export default function ItemList() {
  const [sortBy, setSortBy] = useState(items);
  const [currentSortBy, setCurrentSortBy] = useState("");

  const sortByName = () => {
    let sortedItems = items.toSorted((item1, item2) => {
      if (item1.name > item2.name) {
        return 1;
      } else if (item1.name === item2.name) {
        return 0;
      } else {
        return -1;
      }
    });
    setSortBy(sortedItems);
    setCurrentSortBy("name")
  };

  const sortByCategory = () => {
    let sortedItems = items.toSorted((item1, item2) => {
      if (item1.category > item2.category) {
        return 1;
      } else if (item1.category === item2.category) {
        return 0;
      } else {
        return -1;
      }
    });
    setSortBy(sortedItems);
    setCurrentSortBy("category");
  };

  return (
    <div className='mt-5'>
      <label className='text-white font-bold font-mono text-xl'>Sort By: </label>
      <button className={`bg-yellow-500 border-2 border-black text-white font-bold font-mono text-xl w-28 rounded-xl mr-2 ${currentSortBy === 'name' ? 'bg-yellow-600' : ''}`} onClick={sortByName}>Name</button>
      <button className={`bg-yellow-500 border-2 border-black text-white font-bold font-mono text-xl w-28 rounded-xl ${currentSortBy === 'category' ? 'bg-yellow-600' : ''}`} onClick={sortByCategory}>Category</button>
      <div className="flex flex-col gap-5 w-1/4 ">    
        {sortBy.map((item) => (
          <li key={item.id}><Item name={item.name} quantity={item.quantity} category={item.category}></Item></li>
        ))}
      </div>
    </div>
  );
}
