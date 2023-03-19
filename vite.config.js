import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api/": {
        target: "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },

      "/mastery/": {
        target: "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mastery/, ''),
      },


      // "/yagAPI/": {
      //   target: "http://192.168.1.80:8080/yagAPI/get/categorie",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/yagAPI/, ''),
      // },

      
    },
  },

  
})
