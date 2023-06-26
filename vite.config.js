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

      "/realms": {
        target: "https://ddragon.leagueoflegends.com/realms/euw.json",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/realms/, ''),
      },


      "/champion/": {
        target: "https://ddragon.leagueoflegends.com/cdn/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/champion/, ''),
      },








      "/categorie": {
        // target: "https://yagapi-production.up.railway.app/yagAPI/get",
        target: "http://localhost:8080/yagAPI/get",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/categorie/, ''),
      },

      "/champion": {
        // target: "https://yagapi-production.up.railway.app/yagAPI/get",
        target: "http://localhost:8080/yagAPI/get",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/champion/, ''),
      },

      "/compte": {
        // target: "https://yagapi-production.up.railway.app/yagAPI/post",
        target: "http://localhost:8080/yagAPI/post",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/compte/, ''),
      },
      "/classement": {
        // target: "https://yagapi-production.up.railway.app/yagAPI/get/champion,
        target: "http://localhost:8080/yagAPI/get/champion",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/compte/, ''),
      },

      "/addChampion": {
        // target: "https://yagapi-production.up.railway.app/yagAPI/post",
        target: "http://localhost:8080/yagAPI/post/champion/add",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/addChampion/, ''),
      },


      "/login": {
        // target: "https://yagapi-production.up.railway.app/yagAPI/",
        target: "http://localhost:8080/yagAPI",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/login/, ''),
      },
      
    },
  },

  
})
