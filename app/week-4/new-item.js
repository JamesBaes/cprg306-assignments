"use client";
import React from "react";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
        setQuantity(quantity + 1);
        
    }  

  }

  const decrement = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
  }
  return (
        <div className="bg-indigo-700 basis-32">
            <h1 className="text-3xl font-mono font-extrabold text-center pb-8 border-black b">Quantity: {quantity}</h1>
            <div className="flex flex-row gap-4 justify-center">
                <button className="border-2 basis-32 text-5xl bg-slate-400 hover:bg-slate-500 active:bg-black rounded-xl" onClick = {decrement}>-</button>
                <button className="border-2 basis-32 text-5xl bg-slate-400 hover:bg-slate-500 active:bg-black rounded-xl" onClick = {increment}>+</button>
            </div>
        </div>
  )
}
