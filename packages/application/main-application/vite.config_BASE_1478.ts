import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'
import { resolve } from 'path'
import { UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

const shouldAnalyze = process.env.ANALYZE

const config: UserConfig = {
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: !!shouldAnalyze
        ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })]
        : []
    },
    sourcemap: !!shouldAnalyze
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              importMap: {
                '@mui/material': {
                  styled: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@mui/material', 'styled']
                  }
                },
                '@mui/material/styles': {
                  styled: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@mui/material/styles', 'styled']
                  }
                }
              }
            }
          ]
        ]
      }
    }),
    Checker({
      typescript: true,
      overlay: true,
      eslint: {
        files: 'src',
        extensions: ['.ts', '.tsx']
      }
    })
  ],
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  define: {
    process: {
      env: 'development'
    }
  }
}

const getConfig = () => config

export default getConfig
