const { Router } = require('express')
const cursosRoutes = require('./cursos.routes')
const professorRoutes = require('./professor.routes')

const routes = new Router()

routes.use('/cursos', cursosRoutes)
routes.use('/professores', professorRoutes)

module.exports = routes