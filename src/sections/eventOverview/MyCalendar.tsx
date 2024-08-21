"use client";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Set up the localizer with Moment.js
const localizer = momentLocalizer(moment);

// Example events
const events = [
  {
    id: 0,
    title: "Meeting",
    start: new Date(2024, 7, 22, 10, 0), // August 5, 2024, 10:00 AM
    end: new Date(2024, 7, 22, 12, 0), // August 5, 2024, 12:00 PM
  },
  {
    id: 1,
    title: "Lunch Break",
    start: new Date(2024, 7, 6, 12, 0), // August 6, 2024, 12:00 PM
    end: new Date(2024, 7, 6, 13, 0), // August 6, 2024, 1:00 PM
  },
];

const MyCalendar = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={["week"]}
        min={new Date(2024, 0, 1, 8, 0)} // Set start time at 8 AM
        max={new Date(2024, 0, 1, 18, 0)} // Set end time at 6 PM
        step={60} // Interval for the time slots
        timeslots={1}
        formats={{
          timeGutterFormat: (date, culture, localizer) =>
            localizer.format(date, "h:mm A", culture),
        }}
        onView={() => console.log("View changed")}
        onSelectEvent={(event) => alert(`Event: ${event.title}`)}
      />
    </div>
  );
};

export default MyCalendar;
