import React from "react";
import MainRouter from "../routes/MainRouter";

const Main = () => {
  // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

  //Chrome was blocking running the script on the index page so I added it here. "https://chromestatus.com/feature/5629709824032768"

  return (
    <main>
      <MainRouter />
    </main>
  );
};

export default Main;
