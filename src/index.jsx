import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import { OrderContextProvider } from "./components/context/OrderContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    // <OrderContextProvider>
    <BrowserRouter>
    {/* Inject Emotion before alternative styling like CSS Modules */}
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>    
    </BrowserRouter>
    // </OrderContextProvider>
    // </React.StrictMode>
);
