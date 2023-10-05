import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../Components/Header";

export const userContext = createContext(null);

export default function Home() {
  const [user, setUser] = useState(sessionStorage.getItem('storeUser') ? JSON.parse(sessionStorage.getItem('storeUser')) : null);
  
  const signIn = (prop) => {
    setUser(prop);
    sessionStorage.setItem('storeUser', JSON.stringify(prop));
  }

  const signOut = () => {
    setUser(null);
    sessionStorage.removeItem('user');
  }

  return (
    <>
      <ResponsiveAppBar />
      <div id="details">
        <Outlet context={{user, signIn, signOut}}/>
      </div>
    </>
  );
}