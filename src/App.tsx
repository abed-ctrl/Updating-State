import React, { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Ketchup"] });
  };
  return (
    <div>
      <p>Pizza Toppings : {pizza.toppings.join(" ")}</p>
      <button onClick={handleClick}>Add Ketchup</button>
    </div>
  );
};

export default App;
