const Professor = require('../models/Professor')

class ProfessorController {
    async cadastrarProfessor(request, response) {
        const { nome, email, cursosId } = request.body
        const professor = await Professor.create({ nome, email, cursosId })
        return response.json(professor)
    }
}


module.exports = new ProfessorController()