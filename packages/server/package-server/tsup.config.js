import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['index.ts'],
  outDir: 'build',
  format: ['cjs'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true
})
