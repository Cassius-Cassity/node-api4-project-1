const server = require('express')

PORT = 9000

server.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})