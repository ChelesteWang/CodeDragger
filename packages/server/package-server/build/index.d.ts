import { Options } from 'tsup';

declare function build(opt?: Options): Promise<void>;

declare function compress(source: string): Promise<Buffer | never>;

export { build, compress };
