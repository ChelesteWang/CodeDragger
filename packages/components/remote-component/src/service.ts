import axios from 'axios'
async function getRemoteComponent({ url }: { url: string }) {
  const _url = `/api/file/content/${url}`
  const res = await axios.get(_url).then((res) => res.data.content)
  return res
}

export { getRemoteComponent }
