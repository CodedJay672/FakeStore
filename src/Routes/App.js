import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Components/Header";
import Footer from "../Components/Footer";

export const userContext = createContext(); // create a context to let the header know when the user is signed in

export default function Home() {
  const [user, setUser] = useState(sessionStorage.getItem('storeUser') ? sessionStorage.getItem('storeUser') : null);
  
  const signIn = (prop) => {
    setUser(prop);
    sessionStorage.setItem('storeUser', prop);
  }

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  }

  return (
    <>
      <userContext.Provider value={user} >
        <ResponsiveAppBar />
      </userContext.Provider>
      <div id="details">
        <Outlet context={{signIn, signOut}} />
      </div>
      <Footer />
    </>
  );
}