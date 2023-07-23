import React from "react";
import Lottie from "lottie-react";
import lottieLego from "../lottie/Lottie Lego.json";

const OnProcess = ({ children }) => {
  return (
    <section className="booking-form">
      <h1>We are working on it.</h1>
      {children}
      <Lottie animationData={lottieLego} loop={true} className="animation" />
    </section>
  );
};

export default OnProcess;
