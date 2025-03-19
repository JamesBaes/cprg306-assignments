'use client'
import React from "react";
import { useEffect, useState } from "react";

export default function MealIdeas ({ ingredient }) {

    const [meals, setMeals] = useState([]);

    const fetchMealsIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json()
            return data.meals;
        } catch (error) {
            console.error("Error:", error);
            return [];
        }
    }

    const loadMealIdeas = async () => {
        const result = await fetchMealsIdeas(ingredient);

        // checks the result from the api and handles accordingly.
        if (result == null) {
            setMeals([]);
        } else {
        setMeals(result);
        }
    }

    useEffect(() => {loadMealIdeas()}, [ingredient]);

    return (
        <div>    
            <h1 className='font-mono text-white text-xl font-bold'>Meal ideas</h1>
            <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>
                    <p className="font-mono text-white text-md">{meal.strMeal}</p>
                    <img className="rounded-lg border-black border-2" src={meal.strMealThumb} alt={meal.strMeal} width="200" />
                </li> 
            ))}           
            </ul>
        </div>
    )
}
