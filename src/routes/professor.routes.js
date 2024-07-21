const {Router} = require('express')
const ProfessorController = require('../controllers/ProfessorController')

const professorRoutes = new Router()

professorRoutes.post('/', ProfessorController.cadastrarProfessor)
professorRoutes.get('/', ProfessorController.listarProfessores)
professorRoutes.put('/:id', ProfessorController.atualizarProfessor)
professorRoutes.delete('/:id', ProfessorController.deletarProfessor)

module.exports = professorRoutes