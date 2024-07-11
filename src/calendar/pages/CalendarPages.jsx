import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { Navbar, CalendarEvent, CalendarModal } from "../";

import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";



const myEventsList = [
  {
    title: "All Day Event very long title",
    notes: "This is a test note",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Vladimir Rugama",
      email: "correo@correo.com",
    },

  },
];

export const CalendarPages = () => {

  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");

  const eventStyleGetter = (event, star, end, isSelected) => {
    

    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    }
    return{
      style
    }
  }

  const doubleClick = (e) => {
    console.log({doubleClick: e});
  }

  const onSelect = (e) => {
    console.log({click: e});
  }

  const onViewChanged = (e) => {
    localStorage.setItem("lastView", e);
  }


  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={myEventsList}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(80vh - 80px" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={doubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
    </>
  );
};
