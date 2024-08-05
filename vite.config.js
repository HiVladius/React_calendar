import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default ({ mode }) => {
  // Cargar variables de entorno
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react()],
    define: {
      // Pasar las variables de entorno a la configuración de Vite
      'process.env': {
        VITE_API_URL: env.VITE_API_URL,
      },
    },
    test: {
      transform: {
        "^.+\\.jsx?$": "esbuild-jest",
      },
    },
  });
};
