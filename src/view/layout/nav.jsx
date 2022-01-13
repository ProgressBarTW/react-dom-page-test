import React, {useState} from 'react' 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const Nav = () => {

    return (
        <>
            <Link to="/">
                首頁
            </Link>
            <br />
            <Link to="/products">
                所有商品
            </Link>
                
        </>
    )
}

export default Nav;