import React from "react";

export default function Item({ name, quantity, category }) 
{
    return (
        <div className="flex flex-col text-white text-center border-black border-2 bg-indigo-500 gap-3">
            <h2 className="font-mono font-bold text-2xl">{name}</h2>
            <p className="font-serif">Buy {quantity} in the <strong>{category}</strong> category.</p>
        </div>
    );
}
