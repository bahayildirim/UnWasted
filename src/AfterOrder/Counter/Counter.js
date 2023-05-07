import React, { useState, useEffect } from "react";
import "./Counter.css";

function CountdownTimer() {
  const futureDate = new Date();
  futureDate.setHours(futureDate.getHours() + 1);
  const [timeLeft, setTimeLeft] = useState(
    Math.round((futureDate.getTime() - Date.now()) / 1000)
  );
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  useEffect(() => {
    let remainingTime = timeLeft;
    const hours = Math.floor(remainingTime / 3600);
    remainingTime -= hours * 3600;
    const minutes = Math.floor(remainingTime / 60);
    remainingTime -= minutes * 60;
    const seconds = remainingTime;
    setHours(String(hours).padStart(2, "0"));
    setMinutes(String(minutes).padStart(2, "0"));
    setSeconds(String(seconds).padStart(2, "0"));
  }, [timeLeft]);

  return (
    <div>
      <h2 className="counterText">
        {hours}:{minutes}:{seconds}
      </h2>
    </div>
  );
}

export default CountdownTimer;
