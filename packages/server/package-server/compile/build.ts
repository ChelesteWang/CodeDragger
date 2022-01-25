import {relative, join} from 'path'
import {build as codeBuild, Options} from 'tsup'

export async function build(currentPath: string, opt?: Options) {
    let status='BUILD_SUCCESS'
    const relativePath: string = relative(currentPath, `${join(__dirname, '../src/main.tsx')}`).replaceAll('\\', '/')
    const option: Options = Object.assign({
        entry: [relativePath],
        outDir: 'build',
        format: ['esm', 'cjs'],
        splitting: true,
        sourcemap: true,
        clean: true,
    }, opt)
    try {
        await codeBuild(option);
    } catch (e) {
        status='BUILD_FAILED'
    }
    return status
}

