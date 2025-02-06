import React from "react";
import { Route, Routes } from "react-router-dom";
import Orders from "../pages/Orders";
import HomePage from "../pages/HomePage";


const AuthRoutes = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<Orders />}/>
      </Routes>
    </>
  );
};

export default AuthRoutes;
