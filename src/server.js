const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

app.use(express.static('public'))

nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

app.get('/', (req, res) => {
    
    res.render("index.html")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("The server is running on URL http://localhost:" + PORT)
})