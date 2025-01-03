import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(()=>{
    console.log("Renderd useEffect");
    
  },[btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="Login" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  )
};

export default Header;