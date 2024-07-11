import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import Logo from '../../assets/react.svg'

export const LoginPages = () => {
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    // Manejar el envío del formulario de inicio de sesión
    console.log("Formulario de inicio de sesión enviado");
  };

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    // Manejar el envío del formulario de registro
    console.log("Formulario de registro enviado");
  };

  return (
    <Container component="main" maxWidth="md" style={{ marginTop: "10rem" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
      >
        <img src={Logo} alt="Logo" />
      </Box>

      {/* Contenedor de los formularios */}
      <Grid container spacing={5}>
        {/* Columna de inicio de sesión */}
        <Grid item xs={12} sm={6}>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <form onSubmit={handleSubmitLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login-email"
              label="Correo Electrónico"
              name="login-email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="login-password"
              label="Contraseña"
              type="password"
              id="login-password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </Grid>

        {/* Columna de registro */}
        <Grid item xs={12} sm={6}>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <form onSubmit={handleSubmitRegister}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="register-name"
              label="Nombre"
              name="register-name"
              autoComplete="name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="register-email"
              label="Correo Electrónico"
              name="register-email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="register-password"
              label="Contraseña"
              type="password"
              id="register-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="register-confirm-password"
              label="Repita la Contraseña"
              type="password"
              id="register-confirm-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Crear cuenta
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};
