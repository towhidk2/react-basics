import React, { createContext, useContext, useState } from 'react';

const MealsContext = createContext();
const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals, setMeals }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider;
