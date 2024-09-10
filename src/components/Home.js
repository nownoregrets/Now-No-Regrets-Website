import React from "react";
import learnCodingImage from "../Images/Learn Coding Now No Regrets.png";

export default function Home() {
  return (
    <>
      <div className="hero-slider d-flex">
        {/* Hero Left */}
        <div
          className="containter d-flex flex-column justify-content-center align-items-center text-white mx-5"
          id="hero-left"
        >
          <h5 id="home-subheading">Learn Coding</h5>
          <h1>
          Advance Your Coding Skills | Master Tools & Knowledge Today
          </h1>
          <p>
            Transform your skills with our comprehensive coding resources. Dive
            into our tutorials and guides designed to help you master the latest
            technologies and programming languages.
          </p>

          {/* Button */}
          <div className="container d-flex justify-content-left align-items-center my-3">
            <button className="custom-btn mx-3">Explore Now</button>
            <button className="custom-btn mx-3">Learn Code</button>
          </div>

        </div>

        {/* Hero Right */}
        <div className="container d-flex" id="hero-right">
          <img
            src={learnCodingImage}
            className="card-img-top"
            id="hero-img"
            alt="Learn Coding Now No Regrets"
          />
        </div>
        
      </div>
    </>
  );
}
