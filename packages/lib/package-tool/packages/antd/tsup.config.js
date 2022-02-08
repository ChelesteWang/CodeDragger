import { defineConfig } from 'tsup'
import BuildConfig from '../../tsup.config'
import { lessLoader } from 'esbuild-plugin-less'

export default defineConfig({
  ...BuildConfig,
  esbuildPlugins: [lessLoader()]
})
