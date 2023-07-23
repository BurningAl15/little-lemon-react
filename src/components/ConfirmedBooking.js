import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import clock from "../lottie/clock.json";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      // Decrease the time remaining by 1 second on each interval
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000); // Run the interval every 1000ms (1 second)

    // Cleanup the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    // Cleanup the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  // Format the time into minutes and seconds
  const seconds = timeRemaining % 60;

  return (
    <section className="confirmed">
      <h1>Booking has been confirmed!</h1>

      {timeRemaining > 0 ? (
        <>
          <h2>Redirecting in {`${seconds}`} ...</h2>
          <Lottie animationData={clock} loop={true} className="clockAnimation" />
        </>
      ) : (
        <h2>Redirecting!</h2>
      )}
    </section>
  );
};

export default ConfirmedBooking;
