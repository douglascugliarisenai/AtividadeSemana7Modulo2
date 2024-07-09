const Curso = require('../models/Curso')

class CursoController {
    async cadastrarCurso(dados) {
        const curso = await Curso.create({
            nome: dados.nome,
            duracao: dados.duracao
        })

        return curso
    }
}

module.exports = new CursoController()