import http from '@cdl-pkg/request'

export const jsonSchemaFindByIDAction = async (id: string) => {
  const {
    data: { result }
  } = await http.get(`/api/json_schema/find/${id}`)
  return result
}
