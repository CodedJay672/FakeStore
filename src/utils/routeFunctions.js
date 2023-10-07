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

  sessionStorage.setItem('token', response.data.token);
}