import React from "react";

import { Button } from "@mui/base/Button";

import { DeleteSharp } from "@mui/icons-material";
import { useCalendarStore, useUIStore } from "../../hooks";

export const FabDelete = () => {
  const { startDelitingEvent, hasEventSelected } = useCalendarStore();
 const { isDateModalOpen } = useUIStore();


  const handleDelete = () => {
    startDelitingEvent();
  };


  const shoultDisplay = hasEventSelected && !isDateModalOpen;

  return (
    <Button
      variant="contained"
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        display: shoultDisplay ? "block" : "none",
      }}
    >
      <DeleteSharp sx={{ fontSize: 45 }} color="error" onClick={handleDelete} />
    </Button>
  );
};
