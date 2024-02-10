import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import portfinder from 'portfinder';

export default defineConfig(async () => {
  // Set the base port to check for availability
  portfinder.basePort = 3000; // Or any default port you prefer

  // Find an available port
  const port = await portfinder.getPortPromise();

  // Return the Vite configuration
  return {
    plugins: [react()],
    server: {
      port: port, // Set the server to use the found port
      open: true, // Automatically open the app in the browser
      // ...other server options
    },
    // ...other Vite configurations
  };
});
