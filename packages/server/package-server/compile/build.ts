import { join } from 'path'
import { build as codeBuild, Options } from 'tsup'

export async function build(opt?: Options) {
  const destPath: string = join(__dirname, '../src/index.ts').replaceAll(
    '\\',
    '/'
  )
  const option: Options = Object.assign(
    {
      entry: [destPath],
      sourcemap: false,
      clean: false,
      minify: true,
      external: ['react'],
      dts: {
        resolve: true,
        entry: [destPath]
      }
    },
    opt
  )
  await codeBuild(option)
}
