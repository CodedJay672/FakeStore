import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { products } from "../utils/routeFunctions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";


export async function loader({ params }) {
  const param = params.category;
  const product = await products(param);
  if (!product) {
    throw new Error('Oops! Something went wrong');
  }

  return { product, param };
}

const Img = styled('img')({
  width: "100%",
  height: "200px",
  objectFit: "contain",
  marginBottom: "10px"
});

export default function Category() {
  const { product, param } = useLoaderData();
  const navigate = useNavigation();
  const navigateTo = useNavigate();

  if (navigate.state === 'loading') {
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
    <Grid container spacing={2}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginBottom: "20px" }}>
              {param}
            </Typography>
          </Grid>
          <Grid container spacing={4}>
            {product.map((product) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Paper
                    sx={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      cursor: "pointer",
                    }}
                    onClick={() => navigateTo(`/products/${product.id}`)}
                  >
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%'
                    }}>
                      <Img src={product.image} alt={product.title} />
                      <Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom>{product.title}</Typography>
                      <Typography variant="h6" textAlign="center">${product.price}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}