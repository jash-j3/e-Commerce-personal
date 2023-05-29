import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Firstheader from "./Firstheader";



function Header() {
  return (
    <div style={{ height: "130px" }}>
      <Firstheader />
      <div className="head">
        <span>Home</span>
        <span>Shop</span>
        <span>Our Team</span>
        <span>Contact Us</span>
        {/* <img src="https://picsum.photos/90/30" alt="logo-img" /> */}
        <div className="searchDiv">
          <input
            className="searchBar"
            type="text"
            placeholder="Search across 100000000+ items"
          ></input>
          <SearchIcon className="searchIcon" />
        </div>
        <span>Login</span>
        <ShoppingCartIcon className="shopCart" />
        {/* <img src="https://picsum.photos/90/30" alt="logo-img" />
        <img src="https://picsum.photos/90/30" alt="logo-img" />
        <img src="https://picsum.photos/90/30" alt="logo-img" /> */}
      </div>
      
    </div>
  );
}

export default Header;
