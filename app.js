const express = require('express')
const app = express()
// app.use(express.json())
const port = process.env.PORT || 9001

app.get('/', (req, res) => {
    res.send({
        name: "timo"
    })
    res.end()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})