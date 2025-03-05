import React from "react";
import ItemList from "./item-list";


export default function Page() {
    return (
        <main className="bg-indigo-800 p-5 min-h-screen">
            <h1 className="font-mono font-extrabold text-4xl text-white">Shopping List</h1>
            <ItemList />
        </main>
    );
}