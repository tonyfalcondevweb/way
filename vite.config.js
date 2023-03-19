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


      "/categorie/": {
        target: "https://yagapi-production.up.railway.app/yagAPI/get/categorie",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/categorie/, ''),
      },

      "/champion/": {
        target: "https://yagapi-production.up.railway.app/yagAPI/get/champion",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/champion/, ''),
      },

      "/compte/": {
        target: "https://yagapi-production.up.railway.app/yagAPI/post/compte",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/compte/, ''),
      },

      
    },
  },

  
})
