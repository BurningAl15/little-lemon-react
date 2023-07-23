import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Booking from "../components/Booking";
import ConfirmedBooking from "../components/ConfirmedBooking";
import Hero from "../components/Hero";
import OnProcess from "../components/OnProcess";

const MainRouter = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Since it's a utility component, it doesn't need to render anything.
  };

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/about"
          element={
            <OnProcess>
              <h2>About</h2>
            </OnProcess>
          }
        />
        <Route
          path="/menu"
          element={
            <OnProcess>
              <h2>Menu</h2>
            </OnProcess>
          }
        />
        <Route
          path="/reservations"
          element={
            <OnProcess>
              <h2>Reservations</h2>
            </OnProcess>
          }
        />

        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
};

export default MainRouter;
