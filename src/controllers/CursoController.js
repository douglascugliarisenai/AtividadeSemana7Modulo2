const Curso = require('../models/Curso')

class CursoController {
    async cadastrarCurso(dados) {
        const curso = await Curso.create({
            nome: dados.nome,
            duracao: dados.duracao
        })

        return curso
    }

    async listarCursos() {
        const cursos = await Curso.findAll()
        return cursos
    }
}

module.exports = new CursoController()