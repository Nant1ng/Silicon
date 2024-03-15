import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    API_BASE_URL: JSON.stringify(
      process.env.VITE_API_URL ||
        "https://kyhnet23-assignment.azurewebsites.net/api"
    ),
  },
});
