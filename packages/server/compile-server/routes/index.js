const router = require('koa-router')()
const { build } = require('@cdl-pkg/package-server')
const { join } = require('path')
const axios = require('axios')
const { readFileSync } = require('fs')
const FormData = require('form-data')
const baseURL = 'https://qckvp9.app.cloudendpoint.cn/'
const outDir = '/tmp/dist'
const { v4 } = require('uuid')

router.post('/compile', async (ctx) => {
  await build({ outDir })
  const formData = new FormData()
  const file = readFileSync(join(__dirname, `../${outDir}/index.js`))
  formData.append('file', file, `${v4()}.js`)
  const {
    data: { result }
  } = await axios.post(`${baseURL}/api/file/upload`, formData, {
    headers: formData.getHeaders()
  })
  ctx.body = result
})

module.exports = router
