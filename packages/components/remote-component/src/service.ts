async function getRemoteComponent({ name }: { name: string }) {
  const url =
    'https://qcpnya.file.qingfuwucdn.com/file/3c8a44cf32bb98b4_1643214779409.js'
  const result = await fetch(`${url}`).then((a) => {
    if (!a.ok) {
      throw new Error('Network response was not ok')
    }
    return a as unknown as string
  })
  return result
}

export { getRemoteComponent }
