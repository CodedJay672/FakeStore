import React from "react";
import Slider from 'react-slick';
import { useLoaderData } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { heroCarousel } from "../utils/routeFunctions";
import Container from "@mui/material/Container";
import "./Home.css";
import Products from "../Components/Products";
import Footer from "../Components/Footer";

// loader function loads the data we need in the home page
export async function loader() {
  const products = await heroCarousel();
  if (!products) {
    throw new Error('Oops! Something went wrong');
  }

  return products;
}

export default function Carousel() {
  const data = useLoaderData();
  
  const settings = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  }
  
  return (
    <>
    <Container maxWidth="xl">
      <Slider {...settings}>
        {data.map((product) => {
          return (
            <div key={product.id} className="carousel">
              <img src={product.image} alt={product.title} />
            </div>
          )
        })}
      </Slider>
    </Container>
    <Products />
    <Footer />
    </>
  )
}