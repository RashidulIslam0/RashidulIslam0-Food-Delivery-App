import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
