const express = require('express')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const app = express()

app.use(cors())

app.use(history())

// 托管静态资源
app.use('/mall', express.static(__dirname + '/mall'))

app.listen(3002, () => {
  console.log('http://localhost:3002')
})