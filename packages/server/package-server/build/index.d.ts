import { Options } from 'tsup';

declare function build(currentPath: string, opt?: Options): Promise<string>;

declare function compress(source: string): Promise<Buffer | undefined>;

export { build, compress };
