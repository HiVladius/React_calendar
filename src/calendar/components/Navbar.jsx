import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useAuthStore } from "../../hooks";



export const Navbar = () => {
const {user, startLogout} = useAuthStore();

return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6"> <CalendarMonthIcon/> {user.name} {user.apellido} </Typography>
        </Toolbar>

        <Button
            color="inherit"
            sx={{ justifyContent: "flex-end", color: "red"}}
            onClick={startLogout}
        >
            Salir <ExitToAppIcon sx={{ color: "red" }} />
        </Button>
    </AppBar>
);
};
