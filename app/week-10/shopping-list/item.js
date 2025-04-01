import React from "react";

export default function Item({ name, quantity, category, onSelect }) 
{
    return (
        <div onClick={onSelect} className="flex flex-col text-white text-center cursor-pointer active:bg-yellow-600 border-black border-2 bg-indigo-500 hover:bg-indigo-600 gap-3 mt-3 rounded-xl">
            <h2 className="font-mono font-bold text-2xl">{name}</h2>
            <p className="font-serif">Buy {quantity} in the <strong>{category}</strong> category.</p>
        </div>
    );
}