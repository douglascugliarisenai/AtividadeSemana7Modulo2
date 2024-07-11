const {Router} = require('express')
const ProfessorController = require('../controllers/ProfessorController')

const professorRoutes = new Router()

professorRoutes.post('/', ProfessorController.cadastrarProfessor)

module.exports = professorRoutes