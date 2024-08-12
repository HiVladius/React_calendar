import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

import { calendarAPI } from "../api";
import { convertEventsToDateEvents } from "../helpers/";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    //TODO: Update event

    if (calendarEvent.id) {
      await calendarAPI.put(`/events/${calendarEvent.id}`, calendarEvent);
      dispatch(onUpdateEvent({ ...calendarEvent, user }));
    } else {
      const { data } = await calendarAPI.post("/events", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
    }
  };

  const startDelitingEvent = async() => {
    try {
      await calendarAPI.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar Evento",error.response.data.msg, "error");
      
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarAPI.get("/events");
      const events = convertEventsToDateEvents(data.eventos);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log("Error al cargar los eventos");

      console.log(error);
    }
  };

  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Methods
    setActiveEvent,
    startDelitingEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};
