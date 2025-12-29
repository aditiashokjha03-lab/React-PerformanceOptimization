import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  // Example product list (could be large in real apps)
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
  ];

  // ✅ useMemo: only recompute when products change
  const totalPrice = useMemo(() => {
    console.log("Recalculating total price...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ useCallback: stable function reference
  const handleSelect = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div className="app-container">
      <h2>Total Price: ${totalPrice}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}