"use client";
import React, { useState, useEffect } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState(items);
  const [currentSortBy, setCurrentSortBy] = useState("");
  const [itemsToDisplay, setItemsToDisplay]= useState(items);

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

  useEffect(() => {
    if (currentSortBy) {
      setItemsToDisplay(sortBy);
    } else {
      setItemsToDisplay(items);
    }
  }, [currentSortBy, sortBy, items]);

  return (
    <div className='mt-5'>
      <label className='text-white font-bold font-mono text-xl'>Sort By: </label>
      <button className={`bg-yellow-500 border-2 border-black text-white font-bold font-mono text-xl w-28 rounded-xl mr-2 ${currentSortBy === 'name' ? 'bg-yellow-600' : ''}`} onClick={sortByName}>Name</button>
      <button className={`bg-yellow-500 border-2 border-black text-white font-bold font-mono text-xl w-28 rounded-xl ${currentSortBy === 'category' ? 'bg-yellow-600' : ''}`} onClick={sortByCategory}>Category</button>
      <div className="flex flex-col gap-5 w-1/4 overflow-y-auto max-h-screen">    
        <ul>
          {itemsToDisplay.map((item) => (        
            <li key={item.id}>
              <Item onSelect={() => onItemSelect(item.name)} name={item.name} quantity={item.quantity} category={item.category}/>
            </li>       
          ))}
        </ul> 
      </div>
    </div>
  );
}
