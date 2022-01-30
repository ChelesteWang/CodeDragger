import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  outDir: 'build',
  sourcemap: false,
  clean: true,
  dts: true
})
