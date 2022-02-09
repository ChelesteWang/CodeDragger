export function GenNonDuplicateID() {
  let idStr = Date.now().toString(36)
  idStr += Math.random().toString(36).substring(2)
  return idStr
}

