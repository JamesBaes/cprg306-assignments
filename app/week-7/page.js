'use client';
import React from "react";
import { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json"
import ItemList from "./item-list";


export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems(currentItems => [newItem, ...currentItems])
    }

    return (
        <main className="bg-indigo-800 p-5 min-h-screen">
            <h1 className="font-mono font-extrabold text-4xl text-white">Shopping List</h1>
            <div className="flex justify-start text-white">
                <NewItem onAddItem={handleAddItem} />
            </div>
            <div>
                <ItemList items={items}/>
            </div>
        </main>
    );
}