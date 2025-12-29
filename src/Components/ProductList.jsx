import React from "react";

export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered");
  return (
    <div className="card">
      <h3>Product List</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id} onClick={() => onSelect(p)}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}