const express = require('express')
const produtoRouter = require('./router/produto_router')
const usuarioRouter = require('./router/usuario_router')

const app = express()
const PORT = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//API para testar se a URL está no ar (http://localhost:3000)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/produtos', produtoRouter)

app.use('/api/usuarios', usuarioRouter)

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`)
})
