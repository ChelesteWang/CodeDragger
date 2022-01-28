import { join } from 'path'
import { build as codeBuild, Options } from 'tsup'

export async function build(opt?: Options) {
  const destPath: string = join(__dirname, '../src/main.tsx').replaceAll(
    '\\',
    '/'
  )
  const option: Options = Object.assign(
    {
      entry: [destPath],
      outDir: 'build',
      format: ['esm', 'cjs'],
      splitting: true,
      sourcemap: true,
      clean: false
    },
    opt
  )
  await codeBuild(option)
}
