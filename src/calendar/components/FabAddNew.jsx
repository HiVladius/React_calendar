import React from "react";

import { Button } from "@mui/base/Button";

import { AddCircle } from "@mui/icons-material";
import { useCalendarStore, useUIStore } from "../../hooks";
import { addHours } from "date-fns";

export const FabAddNew = () => {
  const { openDateModal } = useUIStore();

  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#81DAF5",
      user: {
        _id: "123",
        name: "vladimir",
      },
    });
    openDateModal();
  };

  return (
    <Button
      variant="contained"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
    >
      <AddCircle
        sx={{ fontSize: 70 }}
        color="primary"
        onClick={handleClickNew}
      />
    </Button>
  );
};
