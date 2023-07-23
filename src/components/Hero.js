import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero container">
      <h2>Welcome to Little Lemon</h2>
      <div className="background">
        <div className="text">
          <h1 className="home">Little Lemon</h1>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve Table</button>
          </Link>
        </div>
        <div className="filter"></div>
        <img
          src={
            "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          }
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
