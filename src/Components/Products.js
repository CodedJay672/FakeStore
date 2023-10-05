import React, { useState, useEffect } from "react";
import axios from "axios";
import './Products.css';

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  if (!products) {
    return null;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )
}