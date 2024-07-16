import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { Navbar, CalendarEvent, CalendarModal } from "../";

import { localizer, getMessagesES } from "../../helpers";
import { useState } from "react";
import { useUIStore, useCalendarStore } from "../../hooks";




export const CalendarPages = () => {
  const { openDateModal } = useUIStore();
  const { events, activeEvent } = useCalendarStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const eventStyleGetter = (event, star, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const doubleClick = (e) => {
    // console.log({doubleClick: e});
    openDateModal();
  };

  const onSelect = (e) => {
    // console.log({ click: e });


  };

  const onViewChanged = (e) => {
    localStorage.setItem("lastView", e);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
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

      <CalendarModal 
        
      />
    </>
  );
};
