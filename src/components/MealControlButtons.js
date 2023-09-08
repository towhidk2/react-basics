import React, { useState } from "react";
import { useMealsListContext } from "./providers/MealsProvider";

const MealControlButtons = () => {
  const { meals, setMeals } = useMealsListContext();
  const [newMeal, setNewMeal] = useState("");

  const handleAddMeal = () => {
    if (newMeal.trim() !== "") {
      setMeals([...meals, newMeal]);
      setNewMeal("");
    }
  };

  const handleRemoveMeal = (meal) => {
    const updatedMeals = meals.filter((item) => item !== meal);
    setMeals(updatedMeals);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new meal"
        value={newMeal}
        onChange={(e) => setNewMeal(e.target.value)}
      />
      <button onClick={handleAddMeal}>Add Meal</button>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal}
            <button onClick={() => handleRemoveMeal(meal)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealControlButtons;
