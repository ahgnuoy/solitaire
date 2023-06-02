const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('tiny'))

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})