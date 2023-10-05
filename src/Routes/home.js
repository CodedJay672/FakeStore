import React, { useState, createContext } from "react";
import Slider from 'react-slick';
import { useLoaderData } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { heroCarousel } from "../utils/routeFunctions";
import ResponsiveAppBar from "../Components/Header";
import Container from "@mui/material/Container";
import "./Home.css";

// loader function loads the data we need in the home page
export async function loader() {
  const products = await heroCarousel();
  if (!products) {
    throw new Error('Oops! Something went wrong');
  }

  return products;
}

export const userContext = createContext(null);

export default function Home() {
  const data = useLoaderData();
  const [user, setUser] = useState(sessionStorage.getItem('user') || null);
  const signIn = () => {
    setUser('user');
    sessionStorage.setItem('user', user);
  }

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  }

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
    <userContext.Provider value={{user, signIn, signOut}}>
      <ResponsiveAppBar />
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
    </userContext.Provider>
  );
}