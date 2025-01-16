const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Helloo World!')
})

app.listen(port, () => {
  console.log(`Example apps listening on port ${port}`)
})