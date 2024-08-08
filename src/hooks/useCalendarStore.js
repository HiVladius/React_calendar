import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent, isDeleteButtonEnabled } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      // Update
      dispatch(onUpdateEvent({...calendarEvent}));
    } else dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
  };

  const startDelitingEvent = () => {
    dispatch(onDeleteEvent());
  
  }

  return {
    //* Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    

    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDelitingEvent,
  };
};
