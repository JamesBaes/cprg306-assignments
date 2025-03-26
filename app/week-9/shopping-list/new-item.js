"use client";
import React from "react";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");


  // Submission handling function
  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.floor(Math.random() * 1000000),
      name,
      quantity, 
      category
    };

    onAddItem(item);
   
    setName("");
    setQuantity(1);
    setCategory("produce");
  };



  // Incrementing the quantity
  const increment = (event) => {
    event.preventDefault();
    if (quantity < 20) {
        setQuantity(quantity + 1);
        
    }  

  }

  // Decrementing the quantity
  const decrement = (event) => {
    event.preventDefault();
    if (quantity > 1) {
        setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex justify-center">
      <form className="bg-indigo-500 font-mono mt-5 p-5 border-2 rounded-xl border-black" onSubmit={handleSubmit}>
          <div>             
            <input className="bg-slate-400 text-white h-10 w-64 mt-5 mb-2 rounded-lg border-2 placeholder-white border-black" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Item:" required/>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <h2 className="text-xl font-extrabold text-center pb-2 border-black">{quantity}</h2>
            <div className="flex flex-row gap-4 justify-center">
                <button className="border-2 w-8 text-xl bg-slate-400 hover:bg-slate-500 active:bg-black rounded-xl border-black" onClick = {decrement}>-</button>
                <button className="border-2 w-8 text-xl bg-slate-400 hover:bg-slate-500 active:bg-black rounded-xl border-black" onClick = {increment}>+</button>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <select className="w-36 bg-slate-400 rounded-lg border-2 border-black" value={category} onChange={(event) => setCategory(event.target.value)}>
              <optgroup label="Category"/>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-center mt-4 mb-5">
            <button className="bg-yellow-500 w-24 h-10 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-red-600" type="submit">Add Item</button>
          </div>    
      </form> 
    </div>   
  )
}

