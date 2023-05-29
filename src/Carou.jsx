import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Carou.css"
function Carou() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  
const products = [
  {
    id:1,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  },
  {
    id:2,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  },
  {
    id:1,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  },
  {
    id:1,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  },
  {
    id:1,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  },
  {
    id:1,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  },
  {
    id:1,
    imag:"https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
    text: "Cap",
    price: 450
  }
]

  return (
    <div className="carouClass">
      <Carousel breakPoints={breakPoints} pagination={false} enableAutoPlay={true} autoPlaySpeed={3500}>
        {products.map(product => (<Item imag={product.imag} text={product.text} price={product.price}></Item>))}
      </Carousel>
    </div>
  );
}

export default Carou;
