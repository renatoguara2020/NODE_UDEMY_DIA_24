const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send(`<h1>Hello World na porta: ${port} com Express</h1>`)
})

app.listen(port, (err) => {

    if(!err){
  console.log(`Example App listening on port ${port}`)
    }else{

        console.err(err)
    }
})


