import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useTheme } from "@mui/material/styles";
import './navbar.css'
import styles from "./navbar.module.css";

// doesn't work with theme colors
const activeState = ({ isActive, isPending }) => {
  return {
  color: isPending ? "rgb(253 230 138)" : "",
  backgroundColor: isActive ? 'theme.palette.primary.main' : "",
  fontWeight: isActive ? "bold" : ""
  };
};

function Navbar() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState ("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [title, setTitle] = useState("React DataGrid useContext Example")
    const theme = useTheme()

    const updateMenu = () => {
        console.log("isMenuClicked: " + isMenuClicked);
        if (!isMenuClicked) {
            // setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")

        } else {
            // setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    // const navStyle = {
    //   backgroundColor: isActive ? 'blue' : 'gray',
    //   padding: '10px',
    //   textAlign: 'center'
    // }


    return (
    <div className="header">
        {/* <nav style={{ backgroundColor: theme.palette.primary.dark }} className={` ${styles.nav}`}> */}
        <nav style={{ backgroundColor: theme.palette.primary.dark }} >
            <div className='title'>
                {title}
            </div>
            <div className='nav-links'>

                <NavLink className="nav-btn show-nav-buttons" to={"/"}
                 style={({ isActive }) => {
                  return isActive ? {
                     color: theme.palette.secondary.contrastText,
                     backgroundColor: theme.palette.secondary.dark 
                    } :  {
                      color: theme.palette.primary.contrastText,
                      backgroundColor: theme.palette.secondary.light 
                     };
                  }}
                >Home</NavLink>
                <NavLink className="nav-btn show-nav-buttons" to={"/orders"}                  
                style={({ isActive }) => {
                  return isActive ? {
                     color: theme.palette.secondary.contrastText,
                     backgroundColor: theme.palette.secondary.dark 
                    } :  {
                      color: theme.palette.primary.contrastText,
                      backgroundColor: theme.palette.secondary.light 
                     };
                  }}
                >Orders</NavLink>
                <NavLink className="showmenu"  onClick={updateMenu}
                style={({ isActive }) => {
                  return isActive ? {
                     color: theme.palette.secondary.contrastText,
                     backgroundColor: theme.palette.secondary.dark 
                    } :  {
                      color: theme.palette.primary.contrastText,
                      backgroundColor: theme.palette.secondary.light 
                     };
                  }}
                ><IoMenu/></NavLink>

            </div>
        </nav>
    
        <div className={menu_class}>
            <div className='menu-links' onClick={updateMenu} style={{ backgroundColor: theme.palette.primary.main }}>

                <NavLink className="menu-nav-btn" to={"/"}>Home</NavLink>
                <NavLink className="menu-nav-btn" to={"/orders"}>Orders</NavLink>

            </div>
        </div>
    </div>
    
    
    )
}

export default Navbar

