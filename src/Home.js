import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Hamilton Beach Fresh Grind Electric Coffee GrinderHamilton Beach Fresh Grind Electric Coffee Grinder for Beans, Spices and More, Stainless Steel Blades, Removable Chamber, Makes up to 12 Cups, Black "
            price={19.99}
            image="https://m.media-amazon.com/images/I/71X9lDSoykL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="National Tree Company Pre-lit Artificial Christmas Tree | Includes Pre-strung White Lights and Stand | Winchester Pine - 7.5 ft "
            price={293.22}
            image="https://m.media-amazon.com/images/I/715bNqetbwL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Gihuo Men's Winter Fleece Pants Sherpa Lined Sweatpants Active Running Jogger Pants "
            price={29.99}
            image="https://m.media-amazon.com/images/I/51aWGMT6ppL._AC_UY445_.jpg"
            rating={5}
          />
          <Product
            title="Bartesian Premium Cocktail and Margarita Machine for the Home Bar with Push-Button Simplicity and an Easy to Clean Design (55300)"
            price={279.88}
            image="https://m.media-amazon.com/images/I/81EYbpvXJYL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            title=" Invicta Men's 0073 Pro Diver Collection Chronograph 18k Gold-Plated Watch "
            price={69.99}
            image="https://m.media-amazon.com/images/I/71XuxT+R-EL._AC_UY606_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            title=" Marshall Stanmore II Wireless Bluetooth Speaker, Black - NEW "
            price={249.0}
            image="https://m.media-amazon.com/images/I/71VfR7Xhk8L._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
