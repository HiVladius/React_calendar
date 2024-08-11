import React, { useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import Logo from "../../assets/react.svg";

import { useForm } from "../../hooks";

import { useAuthStore } from "../../hooks";

import Swal from "sweetalert2";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginPages = () => {
  const { starLogin, errorMessage, starRegister } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
  } = useForm(loginFormFields);

  const {
    registerName,
    registerLastname,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    starLogin({ email: loginEmail, password: loginPassword });
  };

  const registerSubmit = (event) => {
    event.preventDefault();

    if (registerPassword !== registerPassword2) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
      });
      return;
    }

    starRegister({
      name: registerName,
      lastname: registerLastname,
      email: registerEmail,
      password: registerPassword,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  }, [errorMessage]);

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
          <form onSubmit={loginSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login-email"
              label="Correo Electrónico"
              name="loginEmail"
              value={loginEmail}
              onChange={onLoginInputChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="loginPassword"
              value={loginPassword}
              onChange={onLoginInputChange}
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
          <form onSubmit={registerSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="register-name"
              label="Nombre"
              name="registerName"
              value={registerName}
              onChange={onRegisterInputChange}
              autoComplete="name"
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="register-Lastname"
              label="Lastname"
              name="registerLastname"
              value={registerLastname}
              onChange={onRegisterInputChange}
              autoComplete="name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="register-email"
              label="Correo Electrónico"
              name="registerEmail"
              value={registerEmail}
              onChange={onRegisterInputChange}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="registerPassword"
              value={registerPassword}
              onChange={onRegisterInputChange}
              label="Contraseña"
              type="password"
              id="register-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="registerPassword2"
              value={registerPassword2}
              onChange={onRegisterInputChange}
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
