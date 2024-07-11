import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const Navbar = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Logout");
  };

return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6"> <CalendarMonthIcon/> Vladimir Rugama</Typography>
        </Toolbar>

        <Button
            color="inherit"
            sx={{ justifyContent: "flex-end", color: "red"}}
            onClick={handleLogout}
        >
            Salir <ExitToAppIcon sx={{ color: "red" }} />
        </Button>
    </AppBar>
);
};
