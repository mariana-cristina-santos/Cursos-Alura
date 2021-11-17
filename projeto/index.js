const customexpress = require ("./config/customexpress")

const app = customexpress()

app.listen(3000, () => console.log ("servidor rodando na porta 3000"))

