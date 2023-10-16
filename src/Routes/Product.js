import React from "react";
import { product } from "../utils/routeFunctions";
import { useLoaderData, useNavigation } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CircularProgress } from "@mui/material";
import { addToCart } from "../utils/routeFunctions";

export const loader = ({ params }) => {
  const { id } = params;
  const productDetails = product(id);
  if (!productDetails) {
    throw new Error("Product not found");
  }
  return productDetails;
}

export default function Product() {
  const product = useLoaderData();
  const navigate = useNavigation();

  if( navigate.state === 'loading') {
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
    <Card sx={{
      width: { xs: "90vw", md: "50vw"},
      margin: "30px auto",
      display: { xs: 'block', md: 'flex' },
      padding: { xs: '5px', md: '30px' },
    }}>
      <CardMedia
        component="img"
        sx={{
          height: '300px',
          width: { xs: '100%', md: '50%' },
          objectFit: 'contain',
        }}
        image={product.image}
      />
      <CardContent>
        <Box sx={{
          padding: '5px',
          flexGrow: 1,
        }}>
          <Typography variant="h2" sx={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }} gutterBottom>
            {product.title}
          </Typography>
          <Typography paragraph={true}>{product.description}</Typography>
          <Typography variant="subtitle1">Price: ${product.price}</Typography>
        </Box>
        <CardActions>
          <Button size="small" variant="contained" onClick={() => {
            addToCart(product.id);
          }}>
            Add to Cart
          </Button>
          <Button size ="small" variant="outlined">Buy Now</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}