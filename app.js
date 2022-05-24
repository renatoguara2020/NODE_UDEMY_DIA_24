var http = require('http');


const port = 8080;

http.createServer((req, res) => {

res.end(`<h1>Bem vindo ao meu site com Node na porta: ${port}</h1>`)
}).listen(port);

console.log(`Meu Servidor esta Rodando na porta ${port}`)

