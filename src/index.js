const express = require('express')
const app = express()

app.post('/storeData', (req, res) => {
  const data = req.body
})

const port = 5000

app.listen(port, () => {
  console.log('Server running');
})