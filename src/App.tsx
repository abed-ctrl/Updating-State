import React, { useState } from "react";
import produce from "immer";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) item.quantity = 10;
      })
    );
  };
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {cart.items.map((product, index) => (
          <li>
            Product Name : {product.title} - Product Quantity :{" "}
            {product.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Change Quantity of Product 1</button>
    </div>
  );
};

export default App;
