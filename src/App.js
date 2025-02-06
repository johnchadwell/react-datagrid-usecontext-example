import React, {useState, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/routes/Navbar";
import AuthRoutes from "./components/routes/AuthRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { OrderContextProvider } from "./components/context/OrderContext";

import {themeLight} from "./components/theme/Theme"

function App() {

const [theme, setTheme] = useState(themeLight);

  return (
    <>

      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <OrderContextProvider>
        <Navbar/>
        <AuthRoutes />
        </OrderContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
