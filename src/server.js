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

app.listen(3000, () => {
    console.log("Conectado")
})