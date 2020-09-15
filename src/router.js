
module.exports = (app, port, db, bodyParser) => {
  app.use(bodyParser.json())
  app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
  })

  app.get('/tarefas', (req, res) => {
    db.all("SELECT * FROM TAREFAS", (err, rows) => res.send(JSON.stringify({results:rows})))
  })

  app.post('/tarefas', (req, res) =>{
    const body = req.body
    db.run("INSERT INTO TAREFAS(TITULO, DESCRICAO, STATUS) VALUES (?,?,?)", [
      body.titulo,
      body.descricao,
      body.status
    ], (err) => console.log(err))
    res.send(`Foi filhão!`)
  })

  app.delete('/tarefas/:id', (req, res) => {
    db.run("DELETE FROM TAREFAS WHERE id = ?;", [req.params.id], (err) => console.log(err))
    res.send(`Foi filhão!`)
  })

  app.put('/tarefas/:id', (req, res) =>{
    db.run("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ? WHERE ID = ?;", [req.body.titulo,
      req.body.descricao,
      req.body.status,
      req.params.id])
    res.send(`Foi filhão!`)
  })

  app.listen(port, () => console.log('O server tá on!'))
}