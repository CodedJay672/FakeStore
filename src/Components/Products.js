import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Products.css';
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";

export default function Products() {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  if (!products) {
    return (
      <Box sx={{
        width: '100%',
        height: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <CircularProgress />
      </Box>
    )
  }


  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id} className="card product" onClick={() => navigate(`/products/${product.id}`)}>
            <img src={product.image} alt={product.title} />
            <h3 className="card-header">{product.title}</h3>
            <p><span className="me-4 p-2 text-bg-primary">{product.category}</span> ${product.price}</p>
          </div>
        )
      })}
    </div>
  )
}