const app = require('./server')
const PORT = process.env.port || 5001

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})