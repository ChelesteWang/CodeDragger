import http from '@cdl-pkg/request'
async function getRemoteComponent({ url }: { url: string }) {
  const _url = `/api/file/content/${url}`
  const res = await http.get(_url).then((res) => res.data.content)
  return res
}

export { getRemoteComponent }
