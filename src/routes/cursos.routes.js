const {Router} = require('express')
const CursoController = require('../controllers/CursoController')

const cursosRoutes = new Router()

cursosRoutes.post('/', CursoController.cadastrarCurso)
cursosRoutes.get('/', CursoController.listarCursos)
cursosRoutes.get('/:id', CursoController.buscarCurso)
cursosRoutes.put('/:id', CursoController.atualizarCurso)
cursosRoutes.delete('/:id', CursoController.deletarCurso)

module.exports = cursosRoutes