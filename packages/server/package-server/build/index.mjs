// ../../../node_modules/.pnpm/registry.npmmirror.com+tsup@5.11.11/node_modules/tsup/assets/esm_shims.js
import { fileURLToPath } from "url";
import path from "path";
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// compile/build.ts
import { join } from "path";
import { build as codeBuild } from "tsup";
async function build(opt) {
  const destPath = join(__dirname, "../src/main.tsx").replaceAll("\\", "/");
  const option = Object.assign({
    entry: [destPath],
    outDir: "build",
    format: ["esm", "cjs"],
    splitting: true,
    sourcemap: true,
    clean: false
  }, opt);
  await codeBuild(option);
}

// compile/compress.ts
import compressing, { tgz } from "compressing";
import pump from "pump";
var FileStream = tgz.FileStream;
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const buffers = [];
    stream.on("error", reject);
    stream.on("data", (data) => buffers.push(data));
    stream.on("end", () => resolve(Buffer.concat(buffers)));
  });
}
async function compress(source) {
  const tarStream = new compressing.tar.Stream();
  tarStream.addEntry(source);
  const destStream = pump(tarStream, new compressing.gzip.FileStream());
  return await streamToBuffer(destStream);
}
export {
  build,
  compress
};
//# sourceMappingURL=index.mjs.map