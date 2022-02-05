import { defineConfig } from 'tsup'

export default defineConfig({
    name: 'package-tool',
    sourcemap: true,
    // minify: true,
    external: ['react'],
    dts: {
        resolve: true,
        entry: './src/index.ts',
    },
})