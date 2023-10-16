import axios from 'axios'

const client = axios.create({
  baseURL: 'https://fakestoreapi.com',
  json: true
});

export async function heroCarousel() {
  const response =  await client.get("/products?limit=5");
  if (!response) {
    return null;
  }

  return response.data;
}

export async function login(username, password) {
  const response = await client.post("/auth/login", {
    username,
    password
  });
  return response.data.token;
}

export async function categories() {
  const response = await client.get('/products/categories');
  if (!response) {
    return null;
  }
  return response.data;
}

export async function products(category) {
  const response = await client.get("/products/category/" + category);
  if (!response) {
    return null;
  }
  return response.data;
}

export async function product(id) {
  const response = await client.get("/products/" + id);
  if (!response) {
    return null;
  }
  return response.data;
}

export function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  return year;
}

export function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
}