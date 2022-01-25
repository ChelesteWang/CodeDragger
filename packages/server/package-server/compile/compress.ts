import compressing, {tgz} from "compressing"
// @ts-ignore
import pump from 'pump'
import FileStream = tgz.FileStream;

function streamToBuffer(stream:FileStream):Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const buffers:Array<Buffer> = [];
        stream.on('error', reject);
        stream.on('data', (data:Buffer) => buffers.push(data))
        stream.on('end', () => resolve(Buffer.concat(buffers)))
    });
}

export async function compress (source:string):Promise<Buffer|undefined> {
        const tarStream = new compressing.tar.Stream();
        tarStream.addEntry(source);
        const destStream = pump(tarStream, new compressing.gzip.FileStream());
        return  await streamToBuffer(destStream)
}


