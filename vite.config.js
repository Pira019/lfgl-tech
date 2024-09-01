 
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const path=require('path'); 
// https://vitejs.dev/config/
export default defineConfig({
  resolve :{
    alias :{
      '@' : path.resolve(__dirname,'./src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }},
  plugins: [vue()],
   
   
});