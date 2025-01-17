import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    __DEFINES__: JSON.stringify({
      API_URL: 'https://api.example.com',
      APP_NAME: 'MyApp',
      VERSION: '1.0.0'
    })
  }
});
