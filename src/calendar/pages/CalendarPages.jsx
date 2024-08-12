import { useState, useEffect } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../";
import { localizer, getMessagesES } from "../../helpers";
import { useUIStore, useCalendarStore, useAuthStore } from "../../hooks";


export const CalendarPages = () => {

  const {user} = useAuthStore();

  const { openDateModal } = useUIStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const eventStyleGetter = (event, star, end, isSelected) => {

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);
    
    
    const style = {
      backgroundColor: isMyEvent ? "#367CF7" : "#FF8000",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const doubleClick = (event) => {
    // console.log({doubleClick: e});
    openDateModal();
  };

  const onSelect = (event) => {
    // console.log({ click: e });

    setActiveEvent(event);
  };

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

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
        style={{ height: "calc( 100vh - 80px )" }}
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

      <FabAddNew />
      <FabDelete />
    </>
  );
};
