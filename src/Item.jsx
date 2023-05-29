import "./Item.css";
import React from "react";

function Item(params) {
  return (
    <div className="carouDiv">
      <img src={params.imag}></img>
      <p>{params.text} <br />₹ <span>{params.price}</span></p>
    </div>
  );
}

export default Item;
