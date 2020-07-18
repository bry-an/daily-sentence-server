const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const PORT = process.env.PORT || 5001
const app = express()
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    return res.send("Healthy")
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})