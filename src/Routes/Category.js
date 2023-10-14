import React from "react";
import { useLoaderData } from "react-router-dom";
import { products } from "../utils/routeFunctions";


export async function loader({ params }) {
  const param = params.category;
  const product = await products(param);
  if (!product) {
    throw new Error('Oops! Something went wrong');
  }

  return { product, param };
}

export default function Category() {
  const { product, param } = useLoaderData();

  return (
    <div>
      <h1>{param}</h1>
      {product.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.image} alt={data.title} />
            </div>
          )
        })
      }
    </div>
  );
}