import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const temEvent = {
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
    };
  

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [temEvent],
        activeEvent: null,
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});

// Action creators are generated for each case reducer function
export const { increment } =  calendarSlice.actions;