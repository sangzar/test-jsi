const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    const q = req.params
    console.log(q)

    res.send({'userod':q.id})
})

// /data/?a=aaa&b=bbb
app.get('/data/:val', (req, res) => {
    const q = req.query
    console.log(q)
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params


    console.log(name)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})