"use client";
import React, { useEffect, useState } from "react";
import classes from "./counter.module.css";

const Counter = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-09-23T00:08:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate time only after the component mounts on the client
    setTimeLeft(calculateTimeLeft());

    const timerRef = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerRef);
  }, []);

  return (
    <div className={`container ${classes.container}`}>
      <div>
        <div className={classes.event}>
          <div>
            <span className={classes.days}>
              {timeLeft.days} <span>Días</span>
            </span>
          </div>
          <div className={classes.event__time}>
            <span className={classes.hours}>
              {timeLeft.hours} <span>Horas</span>
            </span>
            <span className={classes.minutes}>
              {timeLeft.minutes} <span>Minutos</span>
            </span>
            <span className={classes.seconds}>
              {timeLeft.seconds} <span>Segundos</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
