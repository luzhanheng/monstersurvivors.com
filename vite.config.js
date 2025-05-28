import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/monstersurvivors.com/', // 必须是你的仓库名
})
