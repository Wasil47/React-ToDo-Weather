import React from "react";
import ToDo from "./todo/ToDo";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "./weather/Weather";

function Web() {
  return (
    <div>
      <Header />
      <Weather />
      <ToDo />
      <Footer />
    </div>
  );
}

export default Web;
