'use client';
import React from "react";
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";


export default function Page() {

    const { user } = useUserAuth();

    const [selectedItemName, setSelectedItemName] = useState();

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user && user.uid) {
            loadItems();
        }
    }, [user]);


    const handleAddItem = (newItem) => { 
        const itemAdded = addItem(user.uid, newItem);
        setItems(currentItems => [{ ...newItem, id: itemAdded.id }, ...currentItems]);   
    }
    
    const handleItemSelect = (itemName) => {

        // replaces all emojis (got this from the webdev 2 website link.)
        itemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, ''); 

        // splits the item name where there is a coma.
        const itemFields = itemName.split(","); 
        itemName = itemFields[0] || itemName; // uses the original itemname if there is not comma present.

        setSelectedItemName(itemName);
    }

    const loadItems = async () => {
        try {
            const result = await getItems(user.uid);
            setItems(result);
        } catch (error) {
            console.log("An error has occured loading the items: ", error);
        }
    }

    
    
    if (!user) 
    {
        return (
            <main className="bg-indigo-800 p-5 min-h-screen">
                <h1 className="font-mono font-extrabold text-4xl text-center text-white">This Page is Restricted.</h1>
            </main>
        );
    }
    else 
    {
        return (
            <main className="bg-indigo-800 p-5 min-h-screen">
                <h1 className="font-mono font-extrabold text-4xl text-white">Shopping List</h1>
                <section className="flex flex-wrap">
                    <div className="flex text-white w-full">
                        <div className="flex flex-col w-full items-start">
                            <NewItem onAddItem={handleAddItem} />
                            <div className="w-full">
                                <ItemList onItemSelect={handleItemSelect} items={items} />
                            </div>
                        </div>
                        <div className="flex w-full justify-start">
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}